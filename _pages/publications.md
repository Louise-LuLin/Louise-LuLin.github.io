---
layout: page
permalink: /publications/
title: Publications
description: Full and up-to-date list is on [Google Scholar](https://scholar.google.com/citations?user=8N04pBgAAAAJ). * denotes equal contribution.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">
<!-- * denotes equal contribution -->
<!-- <h1> preprints </h1> -->

<h1> Conference & Journal Papers </h1>
{% bibliography -f papers -q @*[category=conference]* %}

<h1> Workshop Papers </h1>
{% bibliography -f papers -q @*[category=workshop]* %}

<h1> Preprints </h1>
{% bibliography -f papers -q @*[category=preprint]* %}

</div>
