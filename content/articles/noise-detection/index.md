+++
title = "Stopping criterion during rendering of Computer-Generated Images based on SVD-Entropy"
date = "2021-01-06"
summary="The estimation of  image quality and noise perception still remains an important issue in various image processing applications. It also became a hot topic  in the field of photo-realistic computer graphics where noise is inherent in the calculation process. Unlike natural-scene images however, a reference image is not available for computer-generated images. Thus, classical methods to assess noise quantity and stopping criterion during the rendering process are not usable."

+++

---

# Abstract
This is particularly important in the case of global illumination methods based on stochastic techniques:  they provide photo-realistic images which are however corrupted by stochastic noise. This noise can be reduced by increasing the number of paths, as proved by Monte Carlo theory, but the problem of finding the right number of paths that are required in order to ensure that human observers cannot perceive any noise is still open. Until now,  the features taking part into the human evaluation of the image quality and the remaining perceived noise are not precisely known. Synthetic image generation tends to be very expensive and the produced data sets are high-dimensional data sets. In that case, finding a stopping criterion using a learning framework is a challenging task. In this paper, a new embedded noise characterization method for computer-generated images is introduced. Our method makes it possible to find  the most relevant model to predict which image highlights perceptual noise by using a method based on the Singular Value Decomposition and Entropy, namely the SVD-Entropy. Recurrent Neural Network (RNN) architecture can then be used in order to  extract image noise  and in predicting visual convergence threshold of different parts of any image. Thus a new no-reference image quality assessment is proposed using the relation between SVD-Entropy and perceptual quality, based on a sequence of distorted images. Experiments show that the proposed  method, compared with experimental psycho-visual scores, demonstrates a good consistency between these scores and stopping criterion measures that we obtain.

# Method

- **Journal:** [_Entropy_](https://www.mdpi.com/journal/entropy) 2021, 23(1), 75;
- **Article:** [PDF](https://www.mdpi.com/1099-4300/23/1/75/pdf)
- **DOI:** [https://doi.org/10.3390/e23010075](https://doi.org/10.3390/e23010075) 

# Dataset and results data

**Dataset**:
- Computer generated images dataset: [overview]({{< ref "/resources/sin3d" >}} "overview")

**Thresholds**:
- Human (ground truth): [download](/articles/noise-detection/thresholds/human-thresholds.csv)
- SVD-Entropy RNN: [download](/articles/noise-detection/thresholds/SVD-Entropy-thresholds.csv)
- 26 attributes RNN: [download](/articles/noise-detection/thresholds/26-attributes-thresholds.csv)

*_Note_: Ground truth thresholds are only available on the 40 points of view used for training model (see selected view points below).*

**Training dataset**:
- Training scene: [download](/articles/noise-detection/training/selected_scenes.csv)
- Selected zones: [download](/articles/noise-detection/training/selected_zones.csv)

**Trained models**:

- SVD-Entropy RNN model: [download](/articles/noise-detection/models/paper_svd_entropy_blocks.h5)
- 26 attributes RNN model: [download](/articles/noise-detection/models/paper_26_attributes.h5)

# Citation
```
@article{buisine2021stopping,
  title={Stopping Criterion during Rendering of Computer-Generated Images Based on SVD-Entropy},
  author={Buisine, J{\'e}r{\^o}me and Bigand, Andr{\'e} and Synave, R{\'e}mi and Delepoulle, Samuel and Renaud, Christophe},
  journal={Entropy},
  volume={23},
  number={1},
  pages={75},
  year={2021},
  publisher={Multidisciplinary Digital Publishing Institute}
}
```
