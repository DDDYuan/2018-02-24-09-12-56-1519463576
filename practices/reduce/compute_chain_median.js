'use strict';

function compute_chain_median(collection) {
  return compute_median(collection.split("->").map(e => parseInt(e)));
}

function compute_median(collection) {
  var sorted = collection.sort((a, b) => a - b);
  if(sorted.length % 2 == 0){
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else{
    return sorted[~~(sorted.length / 2)];
  }
}

module.exports = compute_chain_median;
