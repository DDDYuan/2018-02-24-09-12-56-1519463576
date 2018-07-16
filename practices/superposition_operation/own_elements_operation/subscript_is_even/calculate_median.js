'use strict';
var calculate_median = function(collection){
    var list = []
    getListOfEvenIndex(collection, list);
    return compute_median(list);
};

function getListOfEvenIndex(collection, result){
    if(collection.length > 1){
        result.push(collection[1]);
        getListOfEvenIndex(collection.slice(2), result);
    }
}

function compute_median(collection) {
    var sorted = collection.sort((a, b) => a - b);
    if(sorted.length % 2 == 0){
      return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    } else{
      return sorted[~~(sorted.length / 2)];
    }
  }
module.exports = calculate_median;
