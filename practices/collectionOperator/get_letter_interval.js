'use strict';

function get_letter_interval(number_a, number_b) {
  var list = [];
  var aLessThanB = number_a < number_b;
  var start = aLessThanB ? number_a: number_b;
  var end = aLessThanB ? number_b: number_a;

  for(var i = start; i <= end; ++i){
    list.push(i);
  }

  return aLessThanB ? list.map(num => String.fromCharCode(96 + num)): list.reverse().map(num => String.fromCharCode(96 + num));
}

module.exports = get_letter_interval;
