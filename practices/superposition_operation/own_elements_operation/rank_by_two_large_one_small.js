'use strict';
function rank_by_two_large_one_small(collection){
  return two_large_one_small(collection.sort((a, b) => a - b));
}

function two_large_one_small(collection) {
  if(collection.length < 3){
    return collection;
  }
  return collection.slice(1,3).concat(collection[0]).concat(two_large_one_small(collection.slice(3)));
}
module.exports = rank_by_two_large_one_small;
