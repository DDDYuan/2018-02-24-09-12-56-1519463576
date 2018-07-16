function count_same_elements(collection) {
  var res = {};
  collection.map( item => {
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
  return result;
}

module.exports = count_same_elements;
