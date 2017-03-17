import sum from './sum';
import quotient from './quotient';

var numbers = [1, 2, 3, 4];

var line1 = document.querySelector('#line1');
if ( line1 ) {
  line1.innerHTML = sum(numbers);
}

var line2 = document.querySelector('#line2');
if ( line2 ) {
  line2.innerHTML = quotient(numbers);
}
