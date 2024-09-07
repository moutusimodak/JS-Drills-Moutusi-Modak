const {mapObject} =require('./mapobject')
const testObject = { 
    name: "Bruce Wayne", 
    age: 30, 
    location: "Gotham" ,
    
}; 
console.log(mapObject(testObject,(value)=>{

  if(typeof value === 'string'){
    return value.toLowerCase()
  }
  else if(typeof value === 'number'){
    return value +10
  }
  else if(typeof value === 'object'){
    return obj1[1]

  }
}));
