---
layout: page
permalink: /publications/
title: Publications
description: Full and up-to-date list is on <a href='https://scholar.google.com/citations?user=8N04pBgAAAAJ'>Google Scholar</a>.
nav: true
nav_order: 3
---

<u>underline</u> indicates students supervised. * denotes equal contribution.

<!-- _pages/publications.md -->
<div class="publications">
<!-- * denotes equal contribution -->
<!-- <h1> preprints </h1> -->


<h2 text-align="left"> Conference & Journal Papers </h2>
{% bibliography -f papers -q @*[category=conference]* %}

<h2 text-align="left"> Preprints </h2>
{% bibliography -f papers -q @*[category=preprint]* %}

<h2 text-align="left"> Workshop Papers </h2>
{% bibliography -f papers -q @*[category=workshop]* %}

</div>
