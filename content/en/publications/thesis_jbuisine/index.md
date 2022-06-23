---
title: "Machine learning methods for taking into consideration noise in computer generated images"
date: "2021-12-08"
information: "PhD in IT"
category: 4 # 1: article, 2: conference, 3: softwares, 4: others
contributors: ["Jérôme Buisine"]
---

# Abstract

Lighting simulation methods, used in image synthesis, make it possible to obtain so-called photorealistic views of 3D virtual environments. To do this, they use stochastic methods, based on the theory of large numbers, which explore the space of light paths and are characterised by a progressive convergence of the image towards the solution. This progressiveness is visually expressed by the presence of noise, which is gradually reduced as the calculations progress. This noise must be identified and quantified in order to have perceptual criteria for stopping the algorithms in the different areas of the image. This is all the more important as the calculation time for an image can be counted in hours or even tens of hours. Having reliable criteria to stop the calculations at different points of an image would therefore allow significant time savings. In this thesis, we propose to use statistical and machine learning methods for the reduction and detection of this generated noise. The contributions made in the framework of this thesis are: (i) the constitution of a base of synthetic images with the collection of human subjective thresholds of the residual noise, (ii) the study and management of a highly perceptible local noise, (iii) the creation of deep learning models on this base of labelled images and (iv) a phase of validation of the reconstructed images obtained (learned or not) from the models of perception from subjective evaluations. Related work to the thesis research area, notably concerning the management of a specific noise in images called « firefly », has been proposed, as well as the application of a method allowing the targeting of the noise characteristics studied. 

# Citation
```
@inproceedings{buisine2021methodes,
  title={M{\'e}thodes d’apprentissage automatique pour la prise en compte du bruit dans les images de synth{\`e}se},
  author={Buisine, Jérôme},
  year={2021},
  organization={Universit{\'e} du Littoral C{\^o}te d'Opale}
}

```