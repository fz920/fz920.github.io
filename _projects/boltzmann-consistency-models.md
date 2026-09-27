---
layout: page
title: Efficient Boltzmann Sampling
description: Efficient sampling from Boltzmann distributions using consistency models and importance sampling.
img: assets/img/projects/mmd-illustrations.png
importance: 1
category: research
related_publications: true
---

I combined consistency models with importance sampling to sample Boltzmann distributions efficiently.

The method reduced function evaluations from 100 to 6–25 while preserving effective sample size on synthetic and equivariant n-body systems.

{% include figure.liquid loading="eager" path="assets/img/projects/mmd-illustrations.png" title="Consistency-model sampling diagnostics" class="img-fluid rounded z-depth-1" %}

Related publication: [Efficient and Unbiased Sampling of Boltzmann Distributions via Consistency Models]({{ '/publications/#zhang2024efficient' | relative_url }}).
