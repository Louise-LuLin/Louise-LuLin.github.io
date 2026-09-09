---
layout: page
title: Publications
heading_meta: What I am working on
permalink: /publications/
nav: true
nav_order: 3
---
<p><span class="c-accent">Authors with <u>underline</u> are my supervised students, and * indicates equal contribution.</span></p>
<p>Full and up-to-date list is on <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}"><span class="c-link">Google Scholar</span></a>.</p>

<div class="publications">
<h3 class="section-title">Preprints</h3>
{% bibliography -f papers -q @*[category=preprint]* %}

<h3 class="section-title">Conference &amp; Journal Papers</h3>
{% bibliography -f papers -q @*[category=conference]* %}
</div>
