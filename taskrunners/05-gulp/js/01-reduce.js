window.App = window.App || {};

window.App.reduce = function(list, iteratee, memo) {
  list.forEach(function (item) {
    memo = iteratee(item, memo);
  });

  return memo;
}
