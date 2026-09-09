---
layout: page
title: Teaching
heading_meta: My Duty
permalink: /teaching/
nav: true
nav_order: 4
courses:
  - term: Fall 2024
    name: "DS 340W: Applied Data Sciences"
    url: https://sites.psu.edu/lulin/ds-340w-applied-data-sciences-fall-2024/
  - term: Spring 2024
    name: "DS 340W: Applied Data Sciences"
    url: https://sites.psu.edu/lulin/ds-340w-applied-data-sciences-spring-2024/
  - term: Fall 2023
    name: "IST 557: Data Mining: Techniques and Applications"
    url: https://sites.psu.edu/lulin/ist557-fall20223/
  - term: Spring 2023
    name: "DS 310: Machine Learning for Data Analytics"
---
<div class="fancy-collapse-panel">
  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
      {% for c in page.courses %}
      <div class="panel-heading" role="tab" id="heading{{ forloop.index }}">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse{{ forloop.index }}" aria-expanded="true" aria-controls="collapse{{ forloop.index }}">{{ c.term }}</a>
        </h4>
      </div>
      <div id="collapse{{ forloop.index }}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading{{ forloop.index }}">
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <p>{% if c.url %}<a href="{{ c.url }}"><font color="blue">{{ c.name }}</font></a>{% else %}{{ c.name }}{% endif %}</p>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
