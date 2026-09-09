---
layout: page
title: AIR Lab
nav_title: AIR Lab
permalink: /group/
nav: true
nav_order: 2
---
<p>The <strong>AI Reliability (AIR) Lab</strong> at Penn State is led by <a href="{{ '/' | relative_url }}">Lu Lin</a>.
We study when and why machine learning systems fail, and build methods that make them robust, safe and transparent.
See our <a href="{{ '/#research' | relative_url }}">research themes</a> and <a href="{{ '/publications/' | relative_url }}">publications</a>.
If you are interested in joining, please read <a href="{{ '/position/' | relative_url }}">Open Position</a> first.</p>

<h3 class="section-title">Current Members</h3>

<div class="people-grid">
  <div class="person-card person-pi">
    <div class="person-photo" style="background-image:url({{ site.profile_image | relative_url }})"></div>
    <div class="person-name"><a href="{{ '/' | relative_url }}">Lu Lin</a></div>
    <div class="person-role">Principal Investigator</div>
    <div class="person-since">{{ site.position }}</div>
  </div>
  {% for p in site.data.people.current %}
  {% assign parts = p.name | split: ' ' %}
  <div class="person-card">
    {% if p.photo %}
    <div class="person-photo" style="background-image:url({{ p.photo | prepend: '/assets/img/people/' | relative_url }})"></div>
    {% else %}
    <div class="person-photo person-initials" data-i="{{ forloop.index0 | modulo: 4 }}">{{ parts.first | slice: 0 }}{{ parts.last | slice: 0 }}</div>
    {% endif %}
    <div class="person-name">{% if p.url %}<a href="{{ p.url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</div>
    <div class="person-role">{{ p.role }}</div>
    <div class="person-since">{{ p.since }} &ndash; present{% if p.note %}<br><span class="person-note">{{ p.note }}</span>{% endif %}</div>
  </div>
  {% endfor %}
</div>

<h3 class="section-title">Alumni</h3>
{% for g in site.data.people.alumni %}
<h4 class="sub-title">{{ g.group }}</h4>
<ul class="alumni-list">
  {% for p in g.people %}
  <li>{% if p.url %}<a href="{{ p.url }}" class="name">{{ p.name }}</a>{% else %}<span class="name">{{ p.name }}</span>{% endif %} ({{ p.detail }})</li>
  {% endfor %}
</ul>
{% endfor %}
