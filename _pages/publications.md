---
layout: page
permalink: /publications/
title: Publications
description: Full and up-to-date list is on <a href='https://scholar.google.com/citations?user=8N04pBgAAAAJ'>Google Scholar</a>.
nav: true
nav_order: 2
---

<u>underline</u> indicates students supervised. "*" denotes equal contribution.

<!-- _pages/publications.md -->
<div class="publications">
<!-- * denotes equal contribution -->
<!-- <h1> preprints </h1> -->


<h1 align="left"> Conference & Journal Papers </h1>
{% bibliography -f papers -q @*[category=conference]* %}

<h1 align="left"> Preprints </h1>
{% bibliography -f papers -q @*[category=preprint]* %}

<h1 align="left"> Workshop Papers </h1>
{% bibliography -f papers -q @*[category=workshop]* %}

</div>
