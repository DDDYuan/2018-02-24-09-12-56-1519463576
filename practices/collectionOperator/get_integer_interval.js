'use strict';

function get_integer_interval(number_a, number_b) {
  var list = [];
  var aLessThanB = number_a < number_b;
  var start = aLessThanB ? number_a: number_b;
  var end = aLessThanB ? number_b: number_a;

  for(var i = start; i <= end; ++i){
    list.push(i);
  }

  return aLessThanB ? list: list.reverse();
}

module.exports = get_integer_interval;

