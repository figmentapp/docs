# Using Figment with PIX2PIX

Figment is an amazing tool for preparing data for machine learning models. We love [PIX2PIX](https://phillipi.github.io/pix2pix/) because it gives control and it can learn a lot from input data.

The best input data is _structurally similar_ to the input data, that is, there is a one-to-one relationship from the input to the output data. Here are some examples:

_labels to street scene_

_drawings to cats_

_black white to color_

The _trick_ to making the training data is doing the _opposite_ transformation of what we're trying to acquire. So, as an example, to convert black and white image to color images, we're using existing color images and _removing_ the color information, then letting PIX2PIX learn the color mapping.

## What we'll make

We're making a face generator that's built on artificial faces, using [This Person Does Not Exist](https://thispersondoesnotexist.com). In a way, we're creating a second-generation AI, based on existing AI.

This idea was actually developed by [Alexandra Fraser](https://www.alexandrafraser.eu) in her project [Maureen](https://algorithmicgaze.com/projects/maureen/).

## Acquiring the data

We have a folder of data prepared that you can download. These are 5,000 images downloaded from the _This Person Does Not Exist_ website. However, we can also do this using a [Download Image node](/nodes/download-image). In the case of this website, we can fetch the same URL repeatedly and get a different image every time. We can also use expressions to create dynamic URLs (_coming soon!_).

Download the list of images from the website:

**TODO add URL**

## Setting up Figment

Create a new project folder, e.g. on your desktop. Open Figment and immediately save the file in the project folder.

Put your images folder in the project folder as well.

In your new project, delete all nodes except for the [Out node](/nodes/out) at the end.

Create a [Load Image Folder node](/nodes/load-image-folder), click the "Choose" button next to the folder, and select the images folder. The images should now be "animating":

TODO animation of the Load Image Folder

!!! note

    You could also use the [webcam node](/nodes/webcam) to generate an artificial, creepy version of yourself!

The PIX2PIX algorithm requires the input to be square. We're going to be using `512x512` images, so we'll use [Resize node](/nodes/resize) to mold them into shape.

- Create a `Resize` node.
- Set the width and height both to `512`.
- Set the fit mode to `cover`.
- Connect the output of the `Load Image Folder` node to the input of the `Resize` node.

Since these are faces, we want to use a face detection algorithm. The [Detect Faces node](/nodes/detect-faces) works well here. It uses [Google's MediaPipe Face Mesh](https://google.github.io/mediapipe/solutions/face_mesh) to detect face landmarks. Set it up to draw the face mesh.

TODO animation of the face mesh

- Create a `Detect Faces` node.
- Turn off _Draw Contours_
- Turn on _Draw Tesselation_.
- Connect the output of `Resize` to the input of `Detect Faces`.

Our PIX2PIX implementation requires the two images side-by-side. We'll do that with a [Stack node](/nodes/stack). Note that our final size should be `1024x512`, so we'll take the output of `Resize` and `Detect Faces`, which are both `512x512`.

- Create a `Stack` node.
- Connect the output of `Resize` to the first input of `Stack`.
- Connect the output of `Detect Faces` to the second input of `Stack`.

The finishing touch:

- Connect the output of `Stack` to the `Out` node.

We're ready to export. We'll export 5000 frames (as many as we have input images) to an "input" folder.

!!! note

    Why is the exported folder called "input"? It's because it's the **input** for the next step, which is the PIX2PIX machine learning algorithm.
