'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  collection.forEach(element => {
      if (result.indexOf(element) < 0){
          result.push(element);
      }
  });

  return result;
}

module.exports = choose_no_repeat_number;
