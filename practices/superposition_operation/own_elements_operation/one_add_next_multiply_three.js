'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  recursion(collection, result);
  return result;
}

function recursion(collection, result){
  if(collection.length > 1){
    result.push((collection[0] + collection[1]) * 3);
    recursion(collection.slice(1), result);
  }
}
module.exports = one_add_next_multiply_three;
