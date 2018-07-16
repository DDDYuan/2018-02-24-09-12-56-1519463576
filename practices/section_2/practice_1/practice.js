function count_same_elements(collection) {
  var res = {};

  collection.map( item => {
    if(item in res){
      res[item] += 1;
    }
    else{
      res[item] = 1;
    }
  })

  var result = [];
  for(var item in res){
    result.push({"key":item, "count":res[item]});
  }
  return result;
}

module.exports = count_same_elements;
