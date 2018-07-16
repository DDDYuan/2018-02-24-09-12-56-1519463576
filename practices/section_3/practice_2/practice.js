function create_updated_collection(collection_a, object_b) {
  for(var item of collection_a){
    if(object_b["value"].indexOf(item["key"]) >= 0){
      item["count"] -= ~~(item["count"] / 3);
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
