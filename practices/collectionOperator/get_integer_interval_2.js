'use strict';

function get_integer_interval_2(number_a, number_b) {
  var list = [];
  var aLessThanB = number_a < number_b;
  var start = aLessThanB ? number_a: number_b;
  var end = aLessThanB ? number_b: number_a;

  for(var i = start; i <= end; ++i){
    list.push(i);
  }

  var result = list.filter(item => item % 2 == 0);
  return aLessThanB ? result: result.reverse();
}

module.exports = get_integer_interval_2;
