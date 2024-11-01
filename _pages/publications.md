---
layout: page
permalink: /publications/
title: Publications
description: <u>underline</u> indicates students supervised. * denotes equal contribution.
nav: true
nav_order: 3
---

Full and up-to-date list is on <a href='https://scholar.google.com/citations?user=8N04pBgAAAAJ'>Google Scholar</a>.

<!-- _pages/publications.md -->
<div class="publications">
<!-- * denotes equal contribution -->
<!-- <h1> preprints </h1> -->

<blockquote class="block-tip"><h3 text-align="left">Preprints</h3></blockquote>
{% bibliography -f papers -q @*[category=preprint]* %}

<blockquote class="block-tip"><h3 text-align="left">Conference & Journal Papers</h3></blockquote>
{% bibliography -f papers -q @*[category=conference]* %}

</div>
