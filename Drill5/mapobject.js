function mapObject(obj, callback) {
    let res={}
  for(const val in obj){
    if (typeof obj[val] === 'object' && obj[val] !== null) {
        res[val] = mapObject(obj[val], callback);
    } else {
        res[val] = callback(obj[val], val, obj);
    }
        
  }
  return res
}

module.exports ={mapObject}

