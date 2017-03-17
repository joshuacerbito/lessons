var reduce = require('./reduce');
var multiply = require('./multiply');

function quotient (list) {
  return reduce(list, multiply, 1);
}

module.exports = quotient;
