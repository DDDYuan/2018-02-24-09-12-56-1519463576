'use strict';
var single_element = function(collection){
    var list = [];
    getListOfEvenIndex(collection, list);
    return list.filter(num => list.indexOf(num) == list.length - 1 - list.reverse().indexOf(num)).reverse();
};

function getListOfEvenIndex(collection, result){
    if(collection.length > 1){
        result.push(collection[1]);
        getListOfEvenIndex(collection.slice(2), result);
    }
}
module.exports = single_element;
