---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 3
---
<p>Authors with <u>underline</u> are my supervised students, and * indicates equal contribution.
Full and up-to-date list is on <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>.</p>

<div class="pub-filter" role="group" aria-label="Filter publications">
  <span class="pub-filter-label">Show:</span>
  <button type="button" class="pub-filter-btn active" data-filter="all">All</button>
  <button type="button" class="pub-filter-btn" data-filter="psu">At Penn State (2023&ndash;)</button>
</div>

<div class="publications">
<div class="pub-section">
<h3 class="section-title">Preprints</h3>
{% bibliography -f papers -q @*[category=preprint]* %}
</div>

<div class="pub-section">
<h3 class="section-title">Conference &amp; Journal Papers</h3>
{% bibliography -f papers -q @*[category=conference]* %}
</div>
</div>
