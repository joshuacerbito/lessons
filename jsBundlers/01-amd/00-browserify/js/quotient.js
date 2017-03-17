define(['./reduce', './multiply'], function (reduce, multiply) {
  return function quotient (list) {
    return reduce(list, multiply, 1);
  };
});
