const {invert} = require('./invert')


const testObject = { 
    name: "Bruce Wayne", 
    age: 30, 
    location: "Gotham" ,
    
}; 

const myobj = invert(testObject)
console.log(myobj);