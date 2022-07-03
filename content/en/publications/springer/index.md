---
title: "Guided-Generative Network: A new robust deep learning architecture for noise characterization"
date: "2022-07-01"
information: "Deep Learning Applications (Springer, volume 4)"
category: 1 # 1: article, 2: conference, 3: softwares, 4: others
contributors: ["Jérôme Buisine", "Fabien Teytaud", "Samuel Delepoulle", "Christophe Renaud"]
---

# Abstract

Current methods for generating realistic computer-generated images rely on stochastic lighting simulation techniques based on a Monte Carlo approach. These Monte Carlo simulations construct light paths between the camera and light sources within the virtual 3D model to calculate the appearance of objects and provide realistic images. Insufficient sampling of the light path space results in high variance between individual pixels in the image which is visually perceived as noise. To reduce this noise, the number of light path samples must be increased until the noise is no longer visible, but this has the disadvantage of significantly increasing the computation time. Finding the right number of samples needed for human observers to perceive no noise remains an open problem that this paper addresses using a new neural network architecture called Guided-Generative Network (GGN). As it is often difficult to extract features from an image for classification tasks, the GGN attempts to automatically find the desired features for noise detection. This is done through an architecture composed of $3$ models that collaborate to characterize the noise present and guide the classification. The results obtained show that the GGN can correctly solve the problem without prior knowledge of the noise while being competitive with existing methods. A visual validation experiment of the images obtained by the model indicates a significant reliability to the requested task.