+++
title = "vpbrt"
date = "2021-01-06"
summary="Scene viewer for pbrt-v3 which allows the extraction of camera information relative to the current point of view of the scene"

+++

---

## Description

This pbrt viewer allows the extraction of camera information relative to the current point of view of the scene. The rendering of the scene remains light (facets) to allow interactive navigation when using the viewer.

## How to use ?

### Build the project
```
mkdir build
cd build
cmake ..
make -j
```

### Use generated binary 
```
./vpbrt ./path/to/scene.pbrt 
```

## Overview

![bunny](/projects/vpbrt/bunny.gif#width60 "Overview")

## Commands

```
 w/x: left/right translation
 up: moving forward
 down: move back
 left: turn left
 right: turn to the right
 u/d: raise/lower head
 =/+: go down/up
 a/z: open/reduce the fov
 t/T: reduce/increase the translation pitch
 r/R: reduce/increase the rotation step
 r/R: reduce/increase the rotation step
 l/p: display in line/polygon mode
 F2: saving the current position
 q: leave
```

**Note:** current position is saved into `camera_X.txt ` file when using **F2**.


