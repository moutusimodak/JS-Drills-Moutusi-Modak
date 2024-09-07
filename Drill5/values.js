function values(obj) {
    let res=[]
  for(const val in obj){
        res.push(obj[val])
  }
  return res
}
module.exports={values}


