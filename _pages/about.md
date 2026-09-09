---
layout: default
title: Home
permalink: /
nav: true
nav_order: 1
---
<section id="colorlib-home" data-section="home">
  <div class="colorlib-narrow-content">
    <div class="row">
      <div class="col-md-12">
        <div class="row row-bottom-padded-sm animate-box">
          <div class="col-md-12">
            <p><br></p>
            <div class="about-desc page-content">
              <span class="heading-meta">About Me</span>
              <h2 class="colorlib-heading">Who Am I?</h2>

              <p>Hi, I am an Assistant Professor in the <a href="https://ist.psu.edu/"><span class="c-link">College of Information Sciences and Technology</span></a>
                at <a href="https://www.psu.edu"><span class="c-link">Pennsylvania State University</span></a>; I am also affiliated with the
                <a href="https://www.icds.psu.edu/"><span class="c-link">Institute for Computational and Data Sciences</span></a> and
                <a href="https://ai.psu.edu/"><span class="c-link">the Center for Socially Responsible AI</span></a>.
                Prior to that, I received my Ph.D. in Computer Science from the University of Virginia, supervised by
                Dr. <a href="https://www.cs.virginia.edu/~hw5x/"><span class="c-link">Hongning Wang</span></a>.
                I have also interned at Didi Lab, LinkedIn and Pinterest Lab.
                [<a href="{{ site.cv_pdf | relative_url }}"><span class="c-link">Curriculum Vitae</span></a>]</p>

              <p style="font-weight:bold"><span class="c-link">Research Interests</span></p>
              <p>My research contributes to accountable machine learning, particularly through methods for improving robustness and
                transparency under data imperfections and deployment mismatches. I'm particularly fascinated by transformative ML paradigms,
                including large language models (LLMs), multimodal models, federated learning, self-supervised learning, graph neural networks and more.
                By understanding and hardening their working mechanism, my research vision is to establish algorithmic foundations for
                AI-enabled systems to work reliably in practical environments concerning biased, noisy, and out-of-distribution inputs.</p>

              <p><span class="c-accent">Openings: I'm looking for highly motivated students, including PhDs (fully-funded), Masters, undergraduates, and interns.
                Please kindly read <a href="{{ '/position/' | relative_url }}" class="c-accent"><u>Open Position</u></a> for more information before contacting me.</span></p>

              <p style="font-weight:bold"><span class="c-link">News</span></p>
              {% include news.liquid %}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 animate-box">
            <div class="services color-1">
              <span class="icon2"><i class="icon-lock3"></i></span>
              <h3>Trustworthy<br>Machine Learning</h3>
            </div>
          </div>
          <div class="col-md-3 animate-box">
            <div class="services color-2">
              <span class="icon2"><i class="icon-bulb"></i></span>
              <h3>Large Language<br>Models</h3>
            </div>
          </div>
          <div class="col-md-3 animate-box">
            <div class="services color-3">
              <span class="icon2"><i class="icon-share3"></i></span>
              <h3>Graph<br>Learning</h3>
            </div>
          </div>
          <div class="col-md-3 animate-box">
            <div class="services color-4">
              <span class="icon2"><i class="icon-data"></i></span>
              <h3>Federated<br>Learning</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
