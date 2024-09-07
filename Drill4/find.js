function find(elements, callback) {

    for (let i = 0; i < elements.length; i++) {   
        if(callback(elements[i])){
            return elements[i]
        }  
    }
    return "undefined"
}


module.exports ={find}