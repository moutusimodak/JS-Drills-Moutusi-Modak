const {find} = require('./find')

const items =[1,2,3,4,5,5]

const res = find(items,(value)=>{
    return value === 300
    
})
console.log(res);