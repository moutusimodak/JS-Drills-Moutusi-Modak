const {reduce} = require('./reduce')

const items =[1,2,3,4,5,5]

const sum = reduce(items,(a,b)=>{
    
    return a+b
})
console.log(sum);