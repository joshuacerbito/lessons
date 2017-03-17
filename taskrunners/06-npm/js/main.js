window.App = window.App || {};

(function(app) {
  'use strict';

  var numbers = [1, 2, 3, 4];

  var line1 = document.querySelector('#line1');
  if ( line1 ) {
    line1.textContent = app.sum(numbers);
  }

  var line2 = document.querySelector('#line2');
  if ( line2 ) {
    line2.textContent = app.quotient(numbers);
  }
})(window.App);
