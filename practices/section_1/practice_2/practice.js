function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(e => collection_b[0].indexOf(e) >= 0);
}

module.exports = collect_same_elements;
