'use strict';

function collect_min_number(collection) {
  return collection.reduce((preMin, current) => current < preMin? current: preMin);
}

module.exports = collect_min_number;

