function filter(elements, callback) {

    let newarr=[]
    let f=false
    
    for (let i = 0; i < elements.length; i++) {   
        if(callback(elements[i])){
            newarr.push(elements[i])
            f= true
        }  
    }

    if(!f){
        return []
    }
    return newarr

}


module.exports ={filter}