function each(elements, callback) {

    for (let i = 0; i < elements.length; i++) {
        
        callback(elements[i],i)
    }
    
}


module.exports ={each}