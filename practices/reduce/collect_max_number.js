'use strict';

function collect_max_number(collection) {
  return collection.reduce((preMax, current) => current > preMax? current: preMax);
}

module.exports = collect_max_number;
