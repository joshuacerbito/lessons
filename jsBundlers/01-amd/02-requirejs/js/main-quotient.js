require(['./js/quotient'], function(quotient) {
  var numbers = [1, 2, 3, 4];

  var line2 = document.querySelector('#line2');
  if ( line2 ) {
    line2.textContent = quotient(numbers);
  }
});
