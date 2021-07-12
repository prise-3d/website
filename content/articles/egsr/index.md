+++
title = "Firefly removal in Monte Carlo rendering with adaptive Median of meaNs"
date = "2021-06-29"
summary="A method based on the gini coefficient to avoid fireflies on images computed with monte carlow method."

+++

---

# Abstract
Estimating the rendering equation using Monte Carlo methods produces photorealistic images by evaluating a large number of samples of the rendering equation per pixel. The final value for each pixel is then calculated as the average of the contribution of each sample. The mean is a good estimator but not necessarily robust which explains the appearance of some visual artifacts such as fireflies, due to an overestimation of the value of the mean. The MoN (Median of meaNs) is a more robust estimator than the mean which allows to reduce the impact of outliers which are the cause of these fireflies. However, this method converges more slowly than the mean, which reduces its interest for pixels whose distribution does not contain outliers. To overcome this problem we propose an extension of the MoN based on the Gini coefficient in order to exploit the best of the two estimators during the computation. This approach is simple to implement whatever the integrator and does not require complex parameterization. Finally, it presents a reduced computational overhead and leads to the disappearance of fireflies.


# Method

- **HAL:** [https://hal.archives-ouvertes.fr/hal-03201630/](https://hal.archives-ouvertes.fr/hal-03201630/)



# Citation
```
@InProceedings{Buisine2021egsr,
  author     = {Buisine, J{\'e}r{\^o}me and Delepoulle, Samuel and Renaud, Christophe},
  title      = {Firefly Removal in Monte Carlo Rendering with Adaptive Median of meaNs.},
  year       = {2021},
  eventtitle = {The 32nd EuroGraphics Symposium on Rendering 2021},
  eventdate  = {2021-06-29/2021-07-02},
  venue      = {Saarbrucken, Germany & Virtual },
}
```
