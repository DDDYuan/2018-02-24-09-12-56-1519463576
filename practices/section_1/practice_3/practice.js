function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(e => object_b["value"].indexOf(e) >= 0);
}

module.exports = collect_same_elements;
