---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">
<!-- * denotes equal contribution -->
<!-- <h1> preprints </h1> -->

<p>Full and up-to-date list is on <a href="https://scholar.google.com/citations?user=8N04pBgAAAAJ" target="_blank">Google Scholar</a>.</p>
<p>* denotes equal contribution.</p>

<h1> Conference & Journal Papers </h1>
{% bibliography -f papers -q @*[category=conference]* %}

<h1> Workshop Papers </h1>
{% bibliography -f papers -q @*[category=workshop]* %}

<h1> Preprints </h1>
{% bibliography -f papers -q @*[category=preprint]* %}

</div>
