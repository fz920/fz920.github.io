---
layout: page
title: Constrain-KL for Variational Autoencoders
description: A constrained optimisation approach for setting exact KL targets in beta-VAE training.
img: assets/img/projects/fig4_crop.png
importance: 3
category: research
---

At Imperial College London, I developed Constrain-KL, a constrained optimisation method for beta-VAE training.

The method enforces an exact KL target, removing the need to tune beta. It matched NVAE accuracy on CIFAR-10 in our experiments.

{% include figure.liquid loading="eager" path="assets/img/projects/fig4_crop.png" title="Constrained optimisation experiment figure" class="img-fluid rounded z-depth-1" %}
