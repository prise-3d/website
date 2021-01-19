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

### Custom parameters

Current version is an extension of pbrt-v4 with use of some specific needs required during thesis:

Extended command line parameter:

- `--folder `: {string} -- output folder of current rendered scene ;
- `--nimages `: {unsigned} -- number of independent images of `spp ` samples to generate ;
- `--independent `: {bool} -- save or not in an independant way (default 1, hence true) ;
- `--startindex `: {unsigned} -- start output index of first generated image for new run ;
- `--monk `: {unsigned} -- use of Median of meaNs estimator instead of classical mean ;
- `--pakmon `: {bool} -- specify if PakMoN extension is used or not [0, 1].