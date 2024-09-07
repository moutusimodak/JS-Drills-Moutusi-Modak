function reduce(elements, callback, startingValue) {

   
    let result =startingValue;

    for (let i = 0; i < elements.length; i++) { 
        if(result === undefined){
            result = elements[i]
        }  
        else{
            result = callback(result, elements[i])
        }
    }
    return result
}


module.exports ={reduce}