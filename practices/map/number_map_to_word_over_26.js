'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(element => get_letter_from_number(element));
};

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

module.exports = number_map_to_word_over_26;
