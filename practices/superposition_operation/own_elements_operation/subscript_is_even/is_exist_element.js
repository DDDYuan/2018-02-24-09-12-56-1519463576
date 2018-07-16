'use strict';
var is_exist_element = function(collection,element){
    if(collection.length > 0){
        return collection[0] === element || is_exist_element(collection.slice(2), element);
    }
    return false;
};
module.exports = is_exist_element;
