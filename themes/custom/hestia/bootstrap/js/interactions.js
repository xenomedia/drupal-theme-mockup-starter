/*
================================================
Custom Zoomdata Javascript scripts
================================================
*/

/* Asynchronous Font Loader */
/* Passes JSLint thanks to: */
/* https://gist.github.com/nire0510/85e02739c578aa901739 */
(function (window) {
  'use strict';

  // Global configuration for web-font:
  window.WebFontConfig = {
    google: {
      families: [ 'Lato:400,100,100italic,400italic,900:latin' ]
    },
    timeout: 2000
  };

  // Create & inject Google's web font loader:
  var wf = document.createElement("script");
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.async = 'true';
  document.head.appendChild(wf);
})(window);


/* check if browser is IE10 */
if (navigator.userAgent.match('MSIE 10.0;')) {
  $('html').addClass('lt-ie11 ie10');
}

/*
================================================
Custom Zoomdata jQuery scripts
================================================
*/

jQuery(document).ready(function () {
  'use strict';

  //windew responsive funtion
  var device;

  function responsiveWindow(){
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        switch(true) {
          case (windowWidth < 768):
            device = 'phone';
            break;
          case (windowWidth < 992):
            device = 'tablet';
            break;
          case (windowWidth < 1200):
            device = 'small_desktop';
            break;
          default:
            device = 'large_desktop';
        }
        // window.console.log('responsiveWindow: '+device);
      }

    responsiveWindow();

    /*
    * Debounce
    */
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;

        var later = function() {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    }

    window.addEventListener('resize',debounce(function(){
      //update window sieze
      responsiveWindow();
      equalHeight(gridderRowOne);
      equalHeight(gridderRowTwo);
      equalHeight(gridderRowThree);
      equalHeight(gridderRowFour);

    },200));

    var toggles = document.querySelectorAll(".c-hamburger");
    var nav = $('.navigation > div > div nav');
    var tagline = $('.tagline');

    //toggle hamburger button
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

        if(this.classList.contains("is-active") === true) {
          nav.removeClass('closed');
          nav.addClass('opened');
          tagline.addClass('menu-push-down');
        } else {
          nav.removeClass('opened');
          nav.addClass('closed');
          tagline.removeClass('menu-push-down');
        }

      });
    }

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    }

    var expanding = $('.search-expanding');
    var buttonFont = $('.search-expanding i');

    expanding.click(function() {

      $(this).toggleClass('expand-is-open');
      $(this).parent().parent().siblings().toggleClass('search-push-down');
      nav.toggleClass('search-push-down');
      $(this).siblings().toggleClass('searchbox-open');
      buttonFont.toggleClass('glyphicon glyphicon-remove');
    });

     $('.gridder').gridderExpander({
      scroll: true,
      scrollOffset: 100,
      scrollTo: "listitem",                  // panel or listitem
      animationSpeed: 400,
      animationEasing: "easeInOutExpo",
      showNav: true,                      // Show Navigation
      nextText: "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>",                   // Next button text
      prevText: "<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>",               // Previous button text
      closeText: "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>",                 // Close button text
      onStart: function(){
          //Gridder Inititialized
      },
      onContent: function(){
          //Gridder Content Loaded
      },
      onClosed: function(){
          //Gridder Closed
      }
    });

     var gridderRowOne = $('.gridder-list-row-1 .well');
     var gridderRowTwo = $('.gridder-list-row-2 .well');
     var gridderRowThree = $('.gridder-list-row-3 .well');
     var gridderRowFour = $('.gridder-list-row-4 .well');

     function equalHeight(well_box) {
      var tallest = 0;
      well_box.css('height','auto');
      well_box.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
          tallest = thisHeight;
        }
      });
      well_box.height(tallest);
    }

    if(device === 'small_desktop' || device === 'large_desktop') {
      equalHeight(gridderRowOne);
      equalHeight(gridderRowTwo);
      equalHeight(gridderRowThree);
      equalHeight(gridderRowFour);
    }
});
