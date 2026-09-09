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
      <div class="col-md-12 page-content">
        <div class="animate-box">
          <p><br></p>
          <h2 class="colorlib-heading">About Me</h2>

          <p>Hi, I am an Assistant Professor in the <a href="https://ist.psu.edu/">College of Information Sciences and Technology</a>
            at <a href="https://www.psu.edu">Pennsylvania State University</a>, where I lead the
            <a href="{{ '/group/' | relative_url }}"><strong>AI Reliability (AIR) Lab</strong></a>.
            I am also affiliated with the <a href="https://www.icds.psu.edu/">Institute for Computational and Data Sciences</a> and
            <a href="https://ai.psu.edu/">the Center for Socially Responsible AI</a>.
            Prior to that, I received my Ph.D. in Computer Science from the University of Virginia, supervised by
            Dr. <a href="https://www.cs.virginia.edu/~hw5x/">Hongning Wang</a>.
            I have also interned at Didi Lab, LinkedIn and Pinterest Lab.
            [<a href="{{ site.cv_pdf | relative_url }}">Curriculum Vitae</a>]</p>

          <p>My research contributes to accountable machine learning, particularly through methods for improving robustness and
            transparency under data imperfections and deployment mismatches. I'm particularly fascinated by transformative ML paradigms,
            including large language models (LLMs), multimodal models, federated learning, self-supervised learning, graph neural networks and more.
            By understanding and hardening their working mechanism, my research vision is to establish algorithmic foundations for
            AI-enabled systems to work reliably in practical environments concerning biased, noisy, and out-of-distribution inputs.</p>

          <div class="note-warning"><p><strong>Openings:</strong> I'm looking for highly motivated students, including PhDs (fully-funded), Masters, undergraduates, and interns.
            Please kindly read <a href="{{ '/position/' | relative_url }}">Open Position</a> for more information before contacting me.</p></div>
        </div>

        <div id="research" class="animate-box">
          <p><br></p>
          <h2 class="colorlib-heading">Research at the AIR Lab</h2>
          {% include research.liquid %}
        </div>

        <div id="news" class="animate-box">
          <p><br></p>
          <h2 class="colorlib-heading">News</h2>
          {% include news.liquid %}
        </div>
        <p><br><br></p>
      </div>
    </div>
  </div>
</section>
