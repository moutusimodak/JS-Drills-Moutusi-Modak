function flatten(elements) {

    let res=[]
    for(const val of elements){
        if(Array.isArray(val)){
            res.push(...flatten(val))
        }else{
            res.push(val)
        }
    }
    return res
}

module.exports={flatten}