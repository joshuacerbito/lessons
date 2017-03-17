window.App = window.App || {};

window.App.quotient = function(list) {
  return window.App.reduce(list, window.App.multiply, 1);
}
