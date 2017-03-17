require(['./js/sum'], function(sum) {
  var numbers = [1, 2, 3, 4];

  var line1 = document.querySelector('#line1');
  if ( line1 ) {
    line1.textContent = sum(numbers);
  }
});
