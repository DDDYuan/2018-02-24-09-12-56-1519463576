'use strict';

function median_to_letter(collection) {
  return get_letter_from_number(Math.ceil(compute_median(collection)));
}

function compute_median(collection) {
  var sorted = collection.sort((a, b) => a - b);
  if(sorted.length % 2 == 0){
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else{
    return sorted[~~(sorted.length / 2)];
  }
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

module.exports = median_to_letter;
