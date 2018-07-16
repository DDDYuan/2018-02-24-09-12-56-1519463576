'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length != collection_b.length){
    return false;
  }
  if(collection_a.length > 0 && collection_b.length > 0){
    return collection_a === collection_b || 
    (collection_a[0] === collection_b[0] && compare_collections(collection_a.slice(1), collection_b.slice(1)));
  }
  return true;
}

module.exports = compare_collections;


