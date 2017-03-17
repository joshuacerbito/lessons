window.App = window.App || {};

window.App.sum = function(list) {
  return window.App.reduce(list, window.App.add, 0);
}
