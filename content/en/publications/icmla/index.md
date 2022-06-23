---
title: "Guided-Generative Network for noise detection in Monte-Carlo rendering"
date: "2021-12-13"
description: "Estimating the features to be extracted from an image for classification tasks are sometimes difficult, especially if images are related to a particular kind of noise. The aim of this paper is to propose a neural network architecture named Guided-Generative Network (GGN) to extract refined information that allows to correctly quantify the noise present in a sliding window of images. GNN tends to find the desired features to address such a problem in order to emit a detection criterion of this noise. The proposed GGN is applied on photorealistic images which are rendered by Monte-Carlo methods by evaluating a large number of samples per pixel. An insufficient number of samples per pixel tends to result in residual noise which is very noticeable to humans. This noise can be reduced by increasing the number of samples, as proven by Monte-Carlo theory, but this involves considerable computational time. Finding the right number of samples needed for human observers to perceive no noise is still an open problem. The results obtained show that GGN can correctly solve the problem without prior knowledge of the noise while being competitive with existing methods."
information: "International Conference on Machine Learning and Applications (ICMLA)"
category: 2 # 1: article, 2: conference, 3: softwares, 4: others
contributors: ["Jérôme Buisine et al."]
---

# Abstract

Estimating the features to be extracted from an image for classification tasks are sometimes difficult, especially if images are related to a particular kind of noise. The aim of this paper is to propose a neural network architecture named Guided-Generative Network (GGN) to extract refined information that allows to correctly quantify the noise present in a sliding window of images. GNN tends to find the desired features to address such a problem in order to emit a detection criterion of this noise. The proposed GGN is applied on photorealistic images which are rendered by Monte-Carlo methods by evaluating a large number of samples per pixel. An insufficient number of samples per pixel tends to result in residual noise which is very noticeable to humans. This noise can be reduced by increasing the number of samples, as proven by Monte-Carlo theory, but this involves considerable computational time. Finding the right number of samples needed for human observers to perceive no noise is still an open problem. The results obtained show that GGN can correctly solve the problem without prior knowledge of the noise while being competitive with existing methods.


# URI

- **DOI**: [https://doi.org/10.1109/ICMLA52953.2021.00018](https://doi.org/10.1109/ICMLA52953.2021.00018)
- **Preprint on HAL**: [https://hal.archives-ouvertes.fr/hal-03374214/document](https://hal.archives-ouvertes.fr/hal-03374214/document)



# Citation
```
@inproceedings{9680095,
  author={Buisine, Jérôme and Teytaud, Fabien and Delepoulle, Samuel and Renaud, Christophe},
  booktitle={2021 20th IEEE International Conference on Machine Learning and Applications (ICMLA)}, 
  title={Guided-Generative Network for noise detection in Monte-Carlo rendering}, 
  year={2021},
  volume={},
  number={},
  pages={61-66},
  doi={10.1109/ICMLA52953.2021.00018}
}
```