function create_updated_collection(collection_a, object_b) {
  var res = {};
  collection_a.map( item => {
    var count = 1;
    var char = item;
    if(item.indexOf("-") > 0){
      char = item.split("-")[0];
      count = parseInt(item.split("-")[1]);
    }
    if(char in res){
      res[char] += count;
    }
    else{
      res[char] = count;
    }
  })

  var result = [];
  for(var item in res){
    result.push({"key":item, "count":res[item]});
  }

  for(var item of result){
    if(object_b["value"].indexOf(item["key"]) >= 0){
      item["count"] -= ~~(item["count"] / 3);
    }
  }
  return result;
}

module.exports = create_updated_collection;
