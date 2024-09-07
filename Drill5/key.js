function keys(obj) {
    let res=[]
  for(const val in obj){
    res.push(val)
  }
  return res
}


module.exports ={keys}
