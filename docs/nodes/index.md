# Figment Nodes

This is a list of all the nodes in Figment:

## Core

- [Null](./null): Does nothing.
- [Out](./out): Signifies that this is the output of the network.

## Image Operations

### Creating / Loading Images

- [Constant](./constant): Render a constant color.
- [Fetch Image](./fetch-image): Fetch an image from the internet.
- [Load Image](./load-image): Load an image from a file.
- [Load Image Folder](./load-image-folder): Load a folder of images.
- [Load Movie](./load-movie): Load a movie file.
- [Unsplash](./unsplash): Fetch a random image from Unsplash.
- [Webcam Image](./webcam-image): Return a webcam stream.

### Resizing / Cropping / Combining images

- [Resize](./resize): Resize the input image.
- [Crop](./crop): Crop an input image.
- [Composite](./composite): Combine two images together.
- [Stack](./stack): Combine 2 images horizontally / vertically.

### Filters / Effects

The images of the examples courtesy of [John Mark Arnold](https://unsplash.com/@johnmarkarnold) and [Sergey Shmidt](https://unsplash.com/@monstercritic).

- [Blur](./blur): Blur an input image.
- [Border](./border): Generate a border around the image.
- [Canny](./canny): Canny edge detection on input image.
- [Mask Ellipse](./mask-ellipse): Draw a circular mask of an image or color.
- [Emboss](./emboss): Emboss convolution on an input image.
- [Grayscale](./grayscale): Convert the input image to grayscale.
- [Invert](./invert): Invert the colors of input image.
- [Lens Distortion](./lens-distortion): Distort an image using a lens distortion shader.
- [Levels](./levels): Change the brightness/contrast/saturation of an image.
- [Lookup](./lookup): Map the colors of one image to another image.
- [Mirror](./mirror): Mirror the input image over a specific axis.
- [Modulate Color](./modulate-color): Adjust the colors of the input image.
- [Pixelate](./pixelate): Pixelate the input image.
- [Reduce Color](./reduce-color): Reduce the amount of colors of input image.
- [Sharpen](./sharpen): Sharpen an input image
- [Sobel](./sobel): Sobel edge detection on input image.
- [Squares](./squares): Return input image as squares.
- [Threshold](./threshold): Change brightness threshold of input image.
- [Trail](./trail): Don't erase the previous input image, creating a trail.
- [Transform](./transform): Transform the image.

### Machine Learning

- [Detect Objects](./detect-objects): Detect objects in an image and draws labels around them.
- [Detect Faces](./detect-faces): Detect faces in an image.
- [Detect Pose](./detect-pose): Detect human poses in input image.
- [Segment Pose](./segment-pose): Remove the background from an image.
- [Detect Hands](./detect-hands): Detect hands in an input image.
- [Image to Image](./image-to-image): Run a generative image to image model (pix2pix).
