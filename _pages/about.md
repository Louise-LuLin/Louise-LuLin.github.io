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

              <p>Hi, I am an Assistant Professor in the <a href="https://ist.psu.edu/"><font color="blue">College of Information Sciences and Technology</font></a>
                at <a href="https://www.psu.edu"><font color="blue">Pennsylvania State University</font></a>; I am also affiliated with the
                <a href="https://www.icds.psu.edu/"><font color="blue">Institute for Computational and Data Sciences</font></a> and
                <a href="https://ai.psu.edu/"><font color="blue">the Center for Socially Responsible AI</font></a>.
                Prior to that, I received my Ph.D. in Computer Science from the University of Virginia, supervised by
                Dr. <a href="https://www.cs.virginia.edu/~hw5x/"><font color="blue">Hongning Wang</font></a>.
                I have also interned at Didi Lab, LinkedIn and Pinterest Lab.
                [<a href="{{ site.cv_pdf | relative_url }}"><font color="blue">Curriculum Vitae</font></a>]</p>

              <p style="font-weight:bold"><font color="blue">Research Interests</font></p>
              <p>My research contributes to accountable machine learning, particularly through methods for improving robustness and
                transparency under data imperfections and deployment mismatches. I'm particularly fascinated by transformative ML paradigms,
                including large language models (LLMs), multimodal models, federated learning, self-supervised learning, graph neural networks and more.
                By understanding and hardening their working mechanism, my research vision is to establish algorithmic foundations for
                AI-enabled systems to work reliably in practical environments concerning biased, noisy, and out-of-distribution inputs.</p>

              <p><font color="red">Openings: I'm looking for highly motivated students, including PhDs (fully-funded), Masters, undergraduates, and interns.
                Please kindly read <a href="{{ '/position/' | relative_url }}"><font color="red"><u>Open Position</u></font></a> for more information before contacting me.</font></p>

              <p style="font-weight:bold"><font color="blue">News</font></p>
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
