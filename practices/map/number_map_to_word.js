'use strict';
var number_map_to_word = function(collection){
  return collection.map(element => String.fromCharCode(96 + element));
};

module.exports = number_map_to_word;
