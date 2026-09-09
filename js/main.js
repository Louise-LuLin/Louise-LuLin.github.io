;(function () {
  'use strict';

  var isMobile = {
    any: function() {
      return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    }
  };

  var fullHeight = function() {
    if ( !isMobile.any() ) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
    }
  };

  // Fade-in animations (template)
  var contentWayPoint = function() {
    $('.animate-box').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('animated') ) {
        $(this.element).addClass('item-animate');
        setTimeout(function(){
          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              el.addClass((effect || 'fadeInUp') + ' animated').removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });
        }, 100);
      }
    } , { offset: '85%' } );
  };

  // Off-canvas sidebar on small screens (template)
  var burgerMenu = function() {
    $('.js-colorlib-nav-toggle').on('click', function(event){
      event.preventDefault();
      $(this).toggleClass('active');
      $('body').toggleClass('offcanvas');
    });
    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0 && $('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-colorlib-nav-toggle').removeClass('active');
      }
    });
    $(window).scroll(function(){
      if ( $('body').hasClass('offcanvas') ) {
        $('body').removeClass('offcanvas');
        $('.js-colorlib-nav-toggle').removeClass('active');
      }
    });
  };

  // Open external links in a new tab
  var externalLinks = function() {
    $('a[href^="http"]').each(function(){
      if (this.hostname && this.hostname !== window.location.hostname) {
        $(this).attr({ target: '_blank', rel: 'noopener' });
      }
    });
  };

  // Publications: "All" / "At Penn State" filter
  var pubFilter = function() {
    var $btns = $('.pub-filter-btn');
    if (!$btns.length) return;
    var apply = function(mode) {
      $('ol.bibliography > li').each(function(){
        var psu = $(this).find('.pub-entry').attr('data-psu') === 'true';
        $(this).toggle(mode === 'all' || psu);
      });
      // hide year headings and sections that became empty
      $('h3.bibliography').each(function(){
        var $ol = $(this).next('ol.bibliography');
        $(this).toggle($ol.children('li:visible').length > 0);
      });
      $('.pub-section').each(function(){
        $(this).toggle($(this).find('ol.bibliography > li:visible').length > 0);
      });
    };
    $btns.on('click', function(){
      $btns.removeClass('active');
      $(this).addClass('active');
      apply($(this).data('filter'));
    });
    // counts on the buttons
    var total = $('ol.bibliography > li').length;
    var psu = $('.pub-entry[data-psu="true"]').length;
    $btns.filter('[data-filter="all"]').append(' <span class="count">' + total + '</span>');
    $btns.filter('[data-filter="psu"]').append(' <span class="count">' + psu + '</span>');
  };

  // News: show all / show fewer
  var newsToggle = function() {
    $('.news-toggle').on('click', function(e){
      e.preventDefault();
      var $more = $('.news-list .news-more');
      var open = $(this).data('open') === true;
      $more.prop('hidden', open);
      $(this).data('open', !open).text(open ? $(this).data('more') : $(this).data('less'));
    });
  };

  $(function(){
    fullHeight();
    contentWayPoint();
    burgerMenu();
    externalLinks();
    pubFilter();
    newsToggle();
  });

}());
