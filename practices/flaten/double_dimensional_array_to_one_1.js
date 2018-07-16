'use strict';

function double_to_one(collection) {
  var result = [];
  double_to_one_recursion(collection, result);
  return result;
}

function double_to_one_recursion(collection, result){
  if(typeof collection === "number"){
    result.push(collection);
  }
  else if(collection.length > 0){
    double_to_one_recursion(collection[0], result)
    double_to_one_recursion(collection.slice(1), result);
  }
}

module.exports = double_to_one;
