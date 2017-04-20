/*
================================================
Custom Javascript scripts
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
Custom jQuery scripts
================================================
*/

jQuery(document).ready(function () {
  'use strict';
});
