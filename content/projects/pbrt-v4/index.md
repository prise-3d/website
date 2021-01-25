+++
title = "[P3D] pbrt-v4"
date = "2021-01-06"
summary="Custom version of the early release of pbrt-v4 for the PrISE-3D project, the rendering system fourth edition of Physically Based Rendering: From Theory to Implementation."

+++

---

## Description

This is a **custom version** of the early release of **pbrt-v4** for the PrISE-3D project, the rendering system fourth edition of Physically Based Rendering: From Theory to Implementation.

## How to use ?

### Build the project
```
mkdir build
cd build
cmake ..
make -j
```

### Custom version [Parameters]
---------------------------

Current version is an extension of pbrt-v4 with use of some specific needs required during thesis:

Extended command line parameter:

- `--folder`: {string} -- output folder of current rendered scene;
- `--nimages`: {unsigned} -- number of independent images of `spp` samples to generate;
- `--independent`: {bool} -- save or not in an independant way (default 1, hence true);
- `--startindex`: {unsigned} -- start output index of first generated image for new run;
- `--pakmon`: {bool} -- specify if PakMoN (based on k-MON) extension is used or not [0, 1].

**Note:** current version enable to use `MoN` (Median of meaNs) estimator as output:
- `kmon` set the number of Means to use. It is a constant value in order to work on GPU. Value can be update and available at the top of the `src/pbrt/film.h` file (default 11). You need to compile again the pbrt version. A value of `1`, is equivalent to classical mean estimator;
- `PakMoN` is also enable on GPU using the `kmon` parameter value.
  

Custom version [Features]
-------------------------

### Stereoscopic and AutoStereoscopic cameras

Stereocopic camera example into `.pbrt` file:
```
Camera "stereoscopic" "float fov" 50
        "string view" "right" 
#        "string view" "left" 
       "float eyeDistance" [0.065]  
```

**Note:** it is necessary to generate the right and left images separately.

AutoStereocopic camera example into `.pbrt` file:
```
Camera "autostereoscopic" "float fov" 50
       "integer view" [7]
       "integer nbView" [8]
       "float eyeDistance" [0.065]
```

**Note:** only one view can be generated each time. The calculated view is based on the desired number of views but also on the distance fixed at eye level.

### rgbcat2

`rgbcat2` in an executable (available in build folder) in order to merge `left` and `right` images obtained from Stereoscopic camera.

Usage:

```bash
./rgbcat2 <image-left.png> <image-right.png> <output-image.png>
```