'use strict';
var even_group_calculate_average = function(collection){
    var list = [];
    getListOfEvenIndex(collection, list);
    list = list.filter(num => num % 2 == 0);

    var sums = [];
    var counts = [];
    list.forEach(num => {
        var tens = getTens(num);
        if(sums[tens]){
            sums[tens] += num;
            counts[tens]++;
        }
        else{
            sums[tens] = num;
            counts[tens] = 1;
        }
    });

    var result = [];
    for(var index in sums){
        if(sums[index]){
            result.push(sums[index] / counts[index]);
        }
    }
    if(result.length > 0){
        return result;
    }
    return [0];
};

function getListOfEvenIndex(collection, result){
    if(collection.length > 1){
        result.push(collection[1]);
        getListOfEvenIndex(collection.slice(2), result);
    }
}

function getTens(number){
    if(number / 10 < 1){
        return 0;
    }
    return 1 + getTens(number / 10);
}

module.exports = even_group_calculate_average;
