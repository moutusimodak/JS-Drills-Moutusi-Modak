function map(elements, callback) {

    const newarr=[]


    for (let i = 0; i < elements.length; i++) {   
        newarr.push(callback(elements[i],i))     
    }
    return newarr
}


module.exports ={map}