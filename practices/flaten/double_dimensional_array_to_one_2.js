'use strict';

function double_to_one(collection) {
  var result = [];
  double_to_one_recursion_distinct(collection, result);
  return result;
}

function double_to_one_recursion_distinct(collection, result){
  if(typeof collection === "number"){
    if(result.indexOf(collection) < 0){
      result.push(collection);
    }
  }
  else if(collection.length > 0){
    double_to_one_recursion_distinct(collection[0], result)
    double_to_one_recursion_distinct(collection.slice(1), result);
  }
}

module.exports = double_to_one;
