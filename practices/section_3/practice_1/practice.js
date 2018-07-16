function create_updated_collection(collection_a, object_b) {
  for(var item of collection_a){
    if(object_b["value"].indexOf(item["key"]) >= 0){
      item["count"]--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
