'use strict';

function get_union(collection_a, collection_b) {
  var result = Array.from(collection_a);
  collection_b.forEach(element => {
    if(collection_a.indexOf(element) < 0){
      result.push(element);
    }
  });

  return result;
}

module.exports = get_union;

