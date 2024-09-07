const {map} = require('./map')

const items =[1,2,3,4,5,5]

map(items,(value)=>{
    
    console.log(value*value)

})