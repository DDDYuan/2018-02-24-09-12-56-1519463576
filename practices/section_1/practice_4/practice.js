function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(e => object_b["value"].indexOf(e["key"]) >= 0).map(e => e["key"]);
}

module.exports = collect_same_elements;
