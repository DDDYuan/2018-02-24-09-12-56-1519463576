'use strict';

function get_letter_interval_2(number_a, number_b) {
  var list = [];
  var aLessThanB = number_a < number_b;
  var start = aLessThanB ? number_a: number_b;
  var end = aLessThanB ? number_b: number_a;

  for(var i = start; i <= end; ++i){
    list.push(i);
  }

  return aLessThanB? list.map(num => get_letter_from_number(num)): list.reverse().map(num => get_letter_from_number(num));
}

function get_letter_from_number(number){
  if (number <= 26){
    return String.fromCharCode(96 + number);
  }
  else if(number % 26 == 0){
    return get_letter_from_number(~~(number / 26) - 1) + get_letter_from_number(26);
  }
  else {
    return get_letter_from_number(~~(number / 26)) + get_letter_from_number(number % 26);
  }
}

module.exports = get_letter_interval_2;

