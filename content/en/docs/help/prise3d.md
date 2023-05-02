---
title: "PrISE-3D Server"
description: "PrISE-3D access note"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 630
toc: true
---

## Description

Le serveur `prise3d` est un serveur de stockage et de calcul. Il est composé de 25 To de stockage (`/mnt/data`) et de 2 GPU Nvidia :

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.47.03    Driver Version: 510.47.03    CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:23:00.0 Off |                  N/A |
| 23%   39C    P8    25W / 250W |      0MiB / 11264MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   1  NVIDIA RTX A6000    Off  | 00000000:2D:00.0 Off |                  Off |
| 30%   39C    P8    16W / 300W |      0MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
```

## Accéder au serveur

Le serveur `prise3d` est accessible depuis le serveur `diran` qui sert de passerelle. Il faudra donc pour un accès à ce serveur, posséder un compte à la fois sur `diran` et sur `prise3d`.

```
ssh XXXXX@diran.univ-littoral.fr
```

Puis :
```
ssh XXXXX@prise3d
```

**Note :** remplacer `XXXXX` par le username qui vous a été attribué.

## Configuration d'accès

### Sécurité des comptes

Il vous sera nécessaire de mettre à jour les mots de passe sur **chaque** serveur :
```
passwd
```

### Configuration de clés ssh

Pour un accès simplifié, il sera utile de générer une clé ssh sur `diran`. Pour cela, générez une clé sur le serveur `diran` :

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

La clé est générée dans le fichier `~/.ssh/id_ed25519.pub` du serveur `diran`. Pour que l'accès se fasse depuis `ssh`, il faudra ajouter son contenu dans le fichier `.ssh/authorized_keys` du serveur `prise3d`.


## Configuration d'accès avancée

Configuration pour accès par proxy au serveur prise3d (fichier `~/.ssh/config`) :
```
Host=diran
Hostname=diran.univ-littoral.fr
User=XXXXX

Host=prise3d
User=XXXXX
ProxyCommand=ssh diran nc prise3d 22
```

**Note :** remplacer `XXXXX` par le username qui vous a été attribué.

## Contact

Pour toute demande de création de compte ou information supplémentaire, merci de contacter :

- samuel.delepoulle@univ-littoral.fr
- jerome.buisine@univ-littoral.fr