function invert(obj) {
    let test={}
    for(const key in obj){
        test[obj[key]]=key  
    }
    return test
  }
 

module.exports ={invert}

  

