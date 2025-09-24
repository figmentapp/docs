# Creating Custom Nodes

By writing a custom JavaScript node you can add brand‑new image‑processing, audio, or data‑generation to any project.
This guide walks you through the whole workflow – from the UI basics to the final code.

## What a custom node looks like

Every Figment node follows the same scaffold:

```js
/**
 * @name  Node Name
 * @description  Short description of what the node does.
 * @category  category (e.g. image, audio, data)
 */

const inputPort = node.imageIn("in");
// Add here other parameters as needed...
const outputPort = node.imageOut("out");

node.onStart = async () => {
  /* one‑time init (shaders, textures, etc.) */
};

node.onRender = () => {
  /* per‑frame processing */
};

node.onStop = () => {
  /* optional cleanup */
};
```

The block above is the template you’ll paste into your new node after you “fork” a Null node (see the UI steps below).

## Creating a custom node

To create a custom node you need to "fork" it from an existing node. If you want to tweak the code of an existing node, create that one. If you want to start from scratch, use the Null node:

- **Create a Null node:** Double‑click anywhere on the canvas and pick Null from the list.
- **Open the source editor:** Right‑click the new Null node → View Source.
- **Fork the node:** At the bottom of the source panel click Fork.
- **Name your node:** Give it a clear, descriptive name (e.g. “Custom Blur”) and confirm the fork.
- **Replace the code:** In the editor, delete the existing skeleton and replace with your custom code.
- **Build the node:** Click the "Build" button (or type Shift-Enter) to compile the node. Then switch back to the viewer to see the results.

Custom nodes are stored in the `.fgmt` file as source code.

:::info
Figment is actually a custom browser (built in Electron). Use the developer tools (View > Toggle Developer Tools) to debug and inspect your custom node!
:::

## Example: weather forecast node

We're going to write an image processing node that changes the saturation of the image based on the current weather. To get the current weather, it will fetch it from [Open-Meteo](https://open-meteo.com). This API returns, next to temperature and wind speed, also a [WMO code](https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM) indicating a global weather condition. We provided a mapping from the weather codes to the saturation values; change these as you see fit.

The node will take in the following inputs:

- **`in`**: The input image to manipulate
- **`lat`**: The desired latitude
- **`lon`**: The desired longitude
- **`interval`**: How often the node refreshes the weather (3 hours by default)

It will output the current image.

```js
/**
 * @name Weather Saturation
 * @description Adjusts image saturation based on current weather at (latitude, longitude). Fetches every N hours.
 * @category image
 */

const imageIn = node.imageIn('in');
const latIn = node.numberIn('latitude', 51.26, { min: -90,  max: 90, step: 0.01 });
const lonIn = node.numberIn('longitude', 4.40, { min: -180,  max: 180, step: 0.01 });
const intervalIn = node.numberIn('interval', 3, { min: 0.25,  max: 24, step: 0.25 });
const imageOut = node.imageOut('out');

const DEFAULT_SAT = 0.70;
const WMO_SAT = {
   0: 2.00, // Clear sky
   1: 0.90, // Mainly clear
   2: 0.80, // Partly cloudy
   3: 0.65, // Overcast
   45: 0.45, 48: 0.45, // Fog / Depositing rime fog
   51: 0.55, 53: 0.55, 55: 0.55, // Drizzle (light/mod/heavy)
   56: 0.45, 57: 0.45,           // Freezing drizzle
   61: 0.50, 63: 0.50, 65: 0.50, // Rain (light/mod/heavy)
   66: 0.40, 67: 0.40,           // Freezing rain
   71: 0.55, 73: 0.55, 75: 0.55, // Snow (light/mod/heavy)
   77: 0.55,                     // Snow grains
   80: 0.50, 81: 0.50, 82: 0.50, // Rain showers (light/mod/heavy)
   85: 0.55, 86: 0.55,           // Snow showers (light/heavy)
   95: 0.35,                     // Thunderstorm
   96: 0.30, 99: 0.30            // Thunderstorm with hail (slight/heavy)
 };

 const fragmentShader = `
 precision mediump float;
 uniform sampler2D u_input_texture;
 uniform float u_saturation;
 varying vec2 v_uv;

 void main() {
   vec4 c = texture2D(u_input_texture, v_uv);
   // Calculate perceptual luma (Rec. 709)
   float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
   vec3 grey = vec3(luma);
   // Mix original color with saturation value
   vec3 outRgb = mix(grey, c.rgb, luma);
   gl_FragColor = vec4(outRgb, c.a);
 }
 `;

 let _program, _framebuffer;
 let _lastLat, _lastLon, _lastInterval; // This allows us to track changes
 let _timer; // Interval timer
 let _saturation = 0.75;

 node.onStart = async () => {
   _program = figment.createShaderProgram(fragmentShader);
   _framebuffer = new figment.Framebuffer();
   // Fetch immediately, then schedule periodic refreshes.
   await updateWeather();
   rescheduleTimer();
 };

 node.onRender = () => {
   if (!imageIn.value) return;

   _framebuffer.setSize(imageIn.value.width, imageIn.value.height);
   _framebuffer.bind();
   figment.clear();
   figment.drawQuad(_program, {
     u_input_texture: imageIn.value.texture,
     u_saturation: _saturation,
   });
   _framebuffer.unbind();
   imageOut.set(_framebuffer);
 };

async function updateWeather() {
  const lat = latIn.value;
  const lon = lonIn.value;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Open-Meteo HTTP ${res.status}`);
  const json = await res.json();
  const cw = json && json.current_weather;
  if (!cw) throw new Error('No current_weather in response');
  // cw contains { temperature, windspeed, winddirection, weathercode, time }
  _saturation = WMO_SAT[cw.weathercode] || DEFAULT_SAT;
  console.log("Weather code:", cw.weathercode, "Saturation:", _saturation);
}

function rescheduleTimer() {
  if (_timer) clearInterval(_timer);
  const intervalMs = Math.max(0.01, intervalIn.value) * 3600 * 1000;
  _timer = setInterval(updateWeather, intervalMs);
}

latIn.onChange = updateWeather;
lonIn.onChange = updateWeather;
intervalIn.onChange = rescheduleTimer;
```


## Get AI Help

We developed a custom GPT that can help you write or debug custom nodes.

<a href="https://chatgpt.com/g/g-68d3996b835481918330cb7509368404-figmentgpt" target="\_blank"
style={{ backgroundColor: '#444444', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '0.5rem', width: '300px', color: '#eee', textDecoration: 'none' }}>
<img src="/img/tutorials/custom-nodes/figment-icon.png" alt="Figment Icon" style={{ borderRadius: '100%', overflow: 'hidden', width: 44, height: 44 }} />

   <div style={{ display: 'flex', flexDirection: 'column', rowGap: 0 }}>
    <span style={{ fontSize: '1rem', fontWeight: 600 }}>FigmentGPT</span>
    <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.6 }}>by Frederik De Bleser</span>
  </div>
</a>

## Example Nodes

You can inspect the code of any node in Figment by right-clicking and choosing "View Source". Furthermore, the code of Figment is also open-source, so you can look at the [src/nodes](https://github.com/figmentapp/figment/tree/master/src/nodes) directory of Figment.
