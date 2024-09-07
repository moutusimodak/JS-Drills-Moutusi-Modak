function pairs(obj) {
    res=[]
    for(const key in obj){
        res.push([obj[key],key])
    }
    return res
  }


module.exports ={pairs}

  