(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{336:function(e,t,a){"use strict";a.r(t);var o=a(33),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"object-instance-segmentation-using-tensorflow-framework-and-cloud-gpu-technology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-instance-segmentation-using-tensorflow-framework-and-cloud-gpu-technology"}},[e._v("#")]),e._v(" Object Instance Segmentation using TensorFlow Framework and Cloud GPU Technology")]),e._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),a("img",{attrs:{src:"https://i.ibb.co/SPJWCgc/zzed.jpg",alt:""}})]),e._v(" "),a("p",[e._v("In this guide, we will discuss a Computer Vision task: Instance Segmentation. Then, we will present the purpose of this  task  in TensorFlow Framework. Next, we will provide a brief overview of Mask R-CNN network (state-of-the-art model for Instance Segmentation). We also offer a demonstration on Mask R-CNN  model using a jupyter notebook environment: Google Colab")]),e._v(" "),a("h2",{attrs:{id:"what-is-instance-segmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-instance-segmentation"}},[e._v("#")]),e._v(" What is Instance Segmentation?")]),e._v(" "),a("p",[e._v("On the one hand, the Semantic Segmentation (SS) task is one of the Computer Vision task which consists in assigning to each pixel a label among a set of semantic categories.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/L6TLXFQ/22E2.jpg",alt:""}})]),e._v(" "),a("p",[e._v("Ultimately, it is intended to predict a segmentation mask that indicates the category of each pixel. These pixels are classified starting from high-quality feature representations. On the other hand, Instance Segmentation (IS) is based on Semantic Segmentation techniques. It permits to recognize each object instance per pixel for each detected object. These labels are maintained by instance.")]),e._v(" "),a("p",[e._v("The common applications and use cases that take place using the Semantic / Instance Segmentation task are the following:")]),e._v(" "),a("ul",[a("li",[e._v("Autonomous navigation;")]),e._v(" "),a("li",[e._v("Facial Segmentation;")]),e._v(" "),a("li",[e._v("Categorizing clothing items;")]),e._v(" "),a("li",[e._v("Precision Agriculture.")]),e._v(" "),a("li",[e._v("Etc")])]),e._v(" "),a("p",[e._v("For more details, you can look at two use cases related to Semantic Segmentation challenge:")]),e._v(" "),a("p",[e._v("**Use case 1: **"),a("a",{attrs:{href:"https://blog.playment.io/semantic-segmentation-for-autonomous-vehicles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Segmentation for Autonomous vehicles"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("**Use case 1: **"),a("a",{attrs:{href:"https://blog.playment.io/improve-facial-recognition-using-semantic-segmentation-landmark-annotation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Segmentation for Facial recognition"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Examples of Instance Segmentation projects and tutorials:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.pyimagesearch.com/2018/11/26/instance-segmentation-with-opencv/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instance segmentation with OpenCV"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/kulikovv/DeepColoring",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Instance Segmentation by Deep Coloring"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://medium.com/nanonets/how-to-do-image-segmentation-using-deep-learning-c673cc5862ef",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to do Semantic Segmentation using Deep learning"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("Useful books for learning various aspects of Instance Segmentation:")]),e._v(" "),a("ol",[a("li",[e._v("Practical Convolutional Neural Networks: Implement advanced deep learning models using Python: "),a("a",{attrs:{href:"https://www.amazon.com/Practical-Convolutional-Neural-Networks-Implement/dp/1788392302",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Deep Learning for Computer Vision: "),a("a",{attrs:{href:"https://",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"tensorflow-framework-for-deep-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow-framework-for-deep-learning"}},[e._v("#")]),e._v(" TensorFlow Framework for Deep Learning")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TensorFlow"),a("OutboundLink")],1),e._v(" is an integral open source platform for Machine Learning. It has a scalable and exhaustive environment consisting of tools, libraries and community resources that provide researchers and developers the ability to easily develop and deploy applications based on ML technology. The main features of TensorFlow are illustrated in the Figure below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2018/07/Tensorflow-Features.jpg",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Before starting this guide, it is essential to be familiar with the basics of Python programming, Computer Vision concepts, Deep Learning Libraries (TensorFlow + Keras Framework), and OpenCV library.")]),e._v(" "),a("h2",{attrs:{id:"guide-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-map"}},[e._v("#")]),e._v(" Guide map")]),e._v(" "),a("p",[e._v("The content of this guide will be organized according to the following map:")]),e._v(" "),a("ul",[a("li",[e._v("What is Instance Segmentation?;")]),e._v(" "),a("li",[e._v("TensorFlow Framework for Deep Learning")]),e._v(" "),a("li",[e._v("An overview of Mask R-CNN model for Instance Segmentation;")]),e._v(" "),a("li",[e._v("Using Google Colab with GPU (enabled);")]),e._v(" "),a("li",[e._v("Mask R-CNN : Demonstration.")]),e._v(" "),a("li",[e._v("References.")])]),e._v(" "),a("h2",{attrs:{id:"an-overview-of-mask-r-cnn-model-for-instance-segmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-overview-of-mask-r-cnn-model-for-instance-segmentation"}},[e._v("#")]),e._v(" An overview of Mask R-CNN model for Instance Segmentation")]),e._v(" "),a("p",[e._v("Thanks to Mask R-CNN, we can automatically segment and construct pixel masks for each object in input image. We will apply Mask R-CNN  to  visual data such as images and videos.\nMask R-CNN algorithm was presented by He et al[1]. In fact, It builds on previous object detection works, by R-CNN (2013)[2], Fast R-CNN (2015)[3] and Faster R-CNN (2015)[4] respectively. Mask R-CNN not only generates the bounding box for a detected object, but also generates a predictive mask.")]),e._v(" "),a("p",[e._v("Mask R-CNN model is based on Faster R-CNN architecture with 2 major contributions:")]),e._v(" "),a("ol",[a("li",[e._v("Replacement of the ROI Pooling module by a more precise module named "),a("em",[e._v("ROI Align")]),e._v(";")]),e._v(" "),a("li",[e._v("Inserting an additional branch from the ROI Align module.")])]),e._v(" "),a("p",[e._v("This additional branch takes the output of the ROI Align and then sends it into two  convolution layers (CONV). The output of the convolution layers (CONV) is the predicted mask itself.\nIn the following figure, we can see the block diagram  of Mask R-CNN:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.pyimagesearch.com/wp-content/uploads/2018/11/mask_rcnn_mask_resizing.jpg",alt:"Mask R-CNN"}})]),e._v(" "),a("h2",{attrs:{id:"using-google-colab-with-gpu-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-google-colab-with-gpu-enabled"}},[e._v("#")]),e._v(" Using Google Colab with GPU (enabled)")]),e._v(" "),a("p",[e._v("Google Colab has been developped to facilitate collaboration between Machine Learning professionals in a more transparent way.")]),e._v(" "),a("p",[e._v("Sign in to your Google Gmail account in the top right corner, if you haven't already done so. It\nwill ask you to open it with Colab at the top of the screen. Then you will make a copy so that you can edit it.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/pzH18dw/1.png",alt:""}})]),e._v(" "),a("p",[e._v('It is now possible to click on "'),a("em",[e._v("Runtime")]),e._v('" menu button to select the Python version and use GPU/CPU device to speed up the calculation.')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/T1JFqCf/2.png",alt:""}})]),e._v(" "),a("p",[e._v("Now, everything is ready for the environment.")]),e._v(" "),a("h3",{attrs:{id:"verification-that-tensorflow-is-able-to-detect-the-gpu-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification-that-tensorflow-is-able-to-detect-the-gpu-device"}},[e._v("#")]),e._v(" Verification  that TensorFlow is able to detect the GPU device:")]),e._v(" "),a("p",[e._v('Just select "GPU" from the Notebook Settings Accelerator drop-down menu (via Edit menu or  cmd/ctrl-shift-P command).')]),e._v(" "),a("p",[e._v("Execute this psedo-code to confirm that TensorFlow can detect the GPU:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import tensorflow as tf\ndevice_name = tf.test.gpu_device_name() \nif device_name != '/device:GPU:0':\nraise SystemError('GPU device is not detected') \nprint('Detected GPU at: {}'.format(device_name))\n")])])]),a("p",[e._v("It's coming out:")]),e._v(" "),a("p",[a("code",[e._v("Found GPU at: /device:GPU:0")])]),e._v(" "),a("p",[e._v("If you are interested in the type of GPU being used. It's a Nvidia Tesla K80 with 24G of memory. Quite powerful.")]),e._v(" "),a("p",[e._v("Run this code to find out for yourself.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from tensorflow.python.client import device_lib \ndevice_lib.list_local_devices()\n")])])]),a("p",[e._v("It's coming out:")]),e._v(" "),a("p",[a("code",[e._v('physical_device_desc: "device: 0, name: Tesla K80, pci bus id: 0000:00:04.0, compute capability: 3.7"]')])]),e._v(" "),a("h2",{attrs:{id:"mask-r-cnn-demonstration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mask-r-cnn-demonstration"}},[e._v("#")]),e._v(" Mask R-CNN : Demonstration")]),e._v(" "),a("p",[e._v("This section provides an implementation of Mask R-CNN on Keras+TensorFlow Framework.")]),e._v(" "),a("p",[e._v("###1. Installing dependencies and running the demo")]),e._v(" "),a("p",[e._v("Mask R-CNN has some dependencies to install before you can run the demo. Colab allows you to install Python packages via the "),a("code",[e._v("pip")]),e._v(" command, and general Linux packaging/libraries via the "),a("code",[e._v("apt-get")]),e._v(" command.")]),e._v(" "),a("p",[e._v("In case you haven't heard yet. Your current instance of Google Colab runs on an Ubuntu virtual machine. You can execute almost all the Linux commands that you usually do on a Linux machine.\nMask R-CNN depends on "),a("a",{attrs:{href:"https://pypi.org/project/pycocotools/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("pycocotools")]),a("OutboundLink")],1),e._v(" package, you can install it with the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("!pip install Cython\n!git clone https://github.com/waleedka/coco\n!pip install -U setuptools\n!pip install -U wheel\n!make install -C coco/PythonAPI\n")])])]),a("p",[e._v("It clones GitHub's repository. Install the compilation dependencies. Finally, compile and install the coco API library. All this happens in the cloud virtual machine quite quickly.")]),e._v(" "),a("p",[e._v("You are now ready to clone the Mask R-CNN directory of GitHub and access into this directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("!git clone https://github.com/matterport/Mask_RCNNN\n# cd to the reference directory and possibility to download the pre-trained weight. \nimport os\nos.chdir('./Mask_RCNN')\n!wget https://github.com/matterport/Mask_RCNNN/releases/download/v2.0/mask_rcnn_coco.h5\n")])])]),a("p",[e._v("Note that you change directories with the Python script instead of executing a "),a("code",[e._v("cd")]),e._v(" shell command since you execute Python in the current notebook.")]),e._v(" "),a("p",[e._v("Now you can run the demo of Mask R-CNN on Colab, as you would on a local machine.")]),e._v(" "),a("p",[e._v("Follow the below Python codes in order to familiarize yourself with the use of a pre-trained model for detecting and segmenting objects. All psedo-codes will be commented on.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#import of the necessary packages\nimport os \nimport sys \nimport random \nimport math\nimport numpy as np \nimport skimage.io \nimport matplotlib\nimport matplotlib.pyplot as plt \nimport coco\nimport utils\nimport visualize\n%matplotlib inline\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Root directory of the project \nROOT = os.getcwd()\n# Directory to save the trained model and logs files\nMODEL= os.path.join(ROOT, "logs")\n# Local path to trained weights file\nCOCO_MODEL = os.path.join(ROOT, "mask_rcnn_coco.h5") \n# Download COCO trained weights\nif not os.path.exists(COCO_MODEL): utils.download_trained_weights(COCO_MODEL)\n# Image directory to be detected\nIMAGE = os.path.join(ROOT, "images")\n')])])]),a("p",[e._v("###2. Model configurations")]),e._v(" "),a("p",[e._v("We will use a model trained on the "),a("a",{attrs:{href:"http://cocodataset.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS-COCO dataset"),a("OutboundLink")],1),e._v(" (It is a large-scale object detection, segmentation, and captioning dataset). The model configurations are in "),a("code",[e._v("CocoConfig class")]),e._v(" of coco.py file.")]),e._v(" "),a("p",[e._v("Make slight changes to the configurations depending on the task. To do this, subclassify the CocoConfig class and replace its attributes that you need to modify.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class InferenceConfig(coco.CocoConfig):\n# Set the batch size to 1 as we will perform the inference on 1 image at a time. Batch size = GPU_NB * IMAGES_PER_GPU \nGPU_NB = 1\nIMAGES_PER_GPU = 1\nconfig = InferenceConfig() \nconfig.display()\n")])])]),a("p",[e._v("###3. Building models and importing trained weights")]),e._v(" "),a("p",[e._v("In order to create models and load trained weights , please type the following psedo-codes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Create model \nmodel = modellib.MaskRCNN(mode="inference", model_dir=MODEL, config=config)\n\n# Load COCO trained weights\nmodel.load_weights(COCO_MODEL, by_name=True)\n')])])]),a("p",[e._v("###4. Data preparation: MS-COCO dataset")]),e._v(" "),a("p",[e._v('The model classifies objects and returns class IDs, which are integer values that identify each class. Some datasets assign integer values to their classes and others do not. For example, in the MS-COCO dataset, the "person" class is 1. IDs are often sequential, but not always. The COCO dataset, for example, has classes associated with class IDs of classes 70 and 72, but not 71.')]),e._v(" "),a("p",[e._v("To get the list of class names, you can load the dataset and then use the "),a("code",[e._v("class_names")]),e._v(" property like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Loading MS-COCO dataset\ndataset = coco.CocoDataset() \ndataset.load_coco(COCO_DIR, "train")\ndataset.prepare()\n# Print class names\nprint(dataset.class_names)\n')])])]),a("p",[e._v("You have included the list of class names below. The name index of the class in the list represents its ID (first class is 0, second is 1, etc.)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# COCO Class names by indexes\nclass_names = ['BG','person','bicycle','car','motorcycle','airplane','bus','train','truck','boat','traffic light']\n")])])]),a("p",[e._v("###5. Starting object detection process")]),e._v(" "),a("p",[e._v("To perform object detection, just type the following psedo-codes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Loading a random image from the dataset\n\nfile_names = next(os.walk(IMAGE))[2]\nimage = skimage.io.imread(os.path.join(IMAGE, random.choice(file_names)))\n# Running object detection\nresults = model.detect([image], verbose=1)\n# Evaluating results \nr = results[0]\nvisualize.display_instances(image, r['kings'], r['masks'], r['class_ids'],\nclass_names, r['scores'])\n")])])]),a("p",[e._v("###6. Customization of images to be segmented")]),e._v(" "),a("p",[e._v("You can download an image from a third party website such as:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://imgbbb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Imgbbbb"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("You can download your image using "),a("code",[e._v("wget")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Loading a random image from the dataset\nfile_names = next(os.walk(IMAGE_DIR))[2]\nimage = skimage.io.imread(os.path.join(IMAGE,'my_image.jpg'))\n# Running object detection\nresults = model.detect([image], verbose=1)\n# Evaluating results \nr = results[0]\nvisualize.display_instances(image, r['kings'], r['masks'], r['class_ids'],\nclass_names, r['scores'])\n")])])]),a("p",[e._v("For example, the result of object detection and segmentation is shown below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1200/1*8eIcVM-M506P4bA0Y7pbag.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_7-video-object-segmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-video-object-segmentation"}},[e._v("#")]),e._v(" 7. Video object segmentation")]),e._v(" "),a("p",[e._v("There are 3  steps to processing a video file.")]),e._v(" "),a("ol",[a("li",[e._v("Transforming video frames into static images;")]),e._v(" "),a("li",[e._v("Image processing;")]),e._v(" "),a("li",[e._v("Converting processed images into output videos.")])]),e._v(" "),a("p",[e._v("In our previous demo, we asked the model to process only 1 image at a time, as configured in "),a("code",[e._v("IMAGES_PER_GPU")]),e._v(" option.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class InferenceConfig(coco.CocoConfig):\n#  Set the batch size to 1 as we will perform the inference on 1 image at a time. Batch size = GPU_NB * IMAGES_PER_GPU \nIMAGES_PER_GPU = 1\n")])])]),a("p",[e._v("If we are going to process all the video at once, it will take a long time. We will therefore use the GPU to operate several frames simultaneously.\nThe Mask R-CNN pipeline is quite computationally intensive and requires a lot of GPU memory. In Colab, The Tesla K80 GPU with 24G of memory can safely process 3 images at a time. If you go any further, the notebook may crash in the middle of video processing.\nThus, in the psedo-code below, we set the "),a("code",[e._v("batch_size")]),e._v(" to 3 and use the "),a("code",[e._v("cv2 library")]),e._v(" to take 3 images at a time before processing them with the model.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("capture = cv2.VideoCapture(os.path.join(VIDEO, 'demo.mp4')) \nwhile True:\nret, frame = capture.read()\n# Save each frame of the video to a list\nframe_count += 1\nframes.append(frame)\nif len(frames) == batch_size:\nresults = model.detect(frames, verbose=0)\nfor i, item in enumerate(zip(frames, results)): frame = item[0]\nr = item[1]\nframe = display_instances(\nframe, r['kings'], r['masks'], r['class_ids'], class_names, r['scores']\n)\nname = '{0}.jpg'.format(frame_count + i - batch_size) \nname = os.path.join(VIDEO_SAVE_DIR, name)\ncv2.imwrite(name, frame)\n# For starting the next batch \nframes = []\n")])])]),a("p",[e._v("After running this psedo-code, you should now have all the processed image files in "),a("code",[e._v("./videos/save folder.")]),e._v("\nThe next step is easy, you have to generate the new video from these images. We will use "),a("code",[e._v("VideoWriter ()")]),e._v(" function from OpenCV (cv2) to do this.")]),e._v(" "),a("p",[e._v("But there are two things you want to be sure of:")]),e._v(" "),a("p",[a("strong",[e._v("1. Images must be indexed in the same way")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Get all image file paths.\nimages = list(glob.iglob(os.path.join(VIDEO_SAVE,' *.*'))\n# Sort the images by index.\nimages = sorted(images, key=lambda x: float(os.path.split(x)[1][:-3]))\n")])])]),a("p",[a("strong",[e._v("2. The frame rate corresponds to the original video. You can use the following psedo-code to check it or simply open the file property.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("video = cv2.VideoCapture(os.path.join(VIDEO_DIR, trailer1.mp4'));\n# Get OpenCV version\n(major_ver, minor_ver, subminor_ver) = (cv2. version).split('.'')\nif int(major_ver) < 3 :\nfps = video.get(cv2.cv.CV_CAP_PROP_FPS)\nprint(\"Frames per second: {0}\".format(fps)) else :\nfps = video.get(cv2.CAP_PROP_FPS)\nprint(\"Frames per second: {0}\".format(fps))\nvideo.release();\n")])])]),a("p",[e._v("Finally, you can use this psedo-code to generate video from the processed images.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def generate_video(outvid, images=None, fps=30, size=None,is_color=True, format="FMP4"):\n  \n  """\nCreate a video from a list of images.\n@param outvid output video\n@param images list of images to use in the video \n@param fps frame per second\n@param size size of each frame \n@param is_color color\n\n"""\nfrom cv2 import VideoWriter, VideoWriter_fourcc, imread, resize \nfourcc = VideoWriter_fourcc(*format)\nvid = None\nfor image in images:\nif not os.path.path.exists(image):\n  raise FileNotFoundError(image)\nimg = imread(image) \nif vid is None:\n  if size is None:\nsize = img.shape[1], img.shape[0]\nvid = VideoWriter(outvid, fourcc, float(fps), size, is_color)\n  if size[0] != img.shape[1] and size[1] != img.shape[0]:\nimg = resize(img, size) \nvid.write(img)\nvid.release() \nreturn vid\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import glob import os\n# Image directory to be detected\nROOT = os.getcwd()\nVIDEO = os.path.join(ROOT, "videos")\nVIDEO_SAVE = os.path.join(VIDEO, "save")\nimages = list(glob.iglob(os.path.join(VIDEO_SAVE, \'*.*\'))) \n# Sort the images by index\nimages = sorted(images, key=lambda x: float(os.path.split(x)[1][:-3]))\noutvid = os.path.join(VIDEO, "out_video.mp4") \ngenerate_video(outvid, images, fps=30)\n')])])]),a("p",[e._v("Once this step is completed, the segmented video should now be ready to be downloaded into your local machine.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from google.colab import files \nfiles.download('videos/out_video.mp4')\n")])])]),a("p",[e._v('##List of References:\n[1] K. He, G. Gkioxari, P. Dollár, and R. Girshick, "Mask R-CNN", arXiv:1703.06870[cs], March 2017.')]),e._v(" "),a("p",[e._v("[2] R. Girshick, J. Donahue, T. Darrell, et J. Malik, « Rich feature hierarchies for accurate object detection and semantic segmentation », arXiv:1311.2524 [cs], nov. 2013.")]),e._v(" "),a("p",[e._v('[3] R. Girshick, "Fast R-CNN", arXiv:1504.08083[cs], Apr. 2015.')]),e._v(" "),a("p",[e._v("[4] S. Ren, K. He, R. Girshick, et J. Sun, « Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks », arXiv:1506.01497 [cs], juin 2015.")]),e._v(" "),a("p",[e._v("####Other sources :\nTensorFlow, https://www.tensorflow.org/")]),e._v(" "),a("p",[e._v("Keras, https://keras.io/")])])}),[],!1,null,null,null);t.default=n.exports}}]);