'use strict';

function grouping_count(collection) {
  var res = {}

  collection.map( item => {
    if(item in res){
      res[item] += 1;
    }
    else{
      res[item] = 1;
    }
  })

  return res;
}

module.exports = grouping_count;
