'use strict';
var calculate_average = function(collection){
    var list = [];
    getListOfEvenIndex(collection, list);
    return list.reduce((p, c) => p + c) / list.length;
};

function getListOfEvenIndex(collection, result){
    if(collection.length > 1){
        result.push(collection[1]);
        getListOfEvenIndex(collection.slice(2), result);
    }
}

module.exports = calculate_average;
