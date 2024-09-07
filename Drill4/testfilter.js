const {filter} = require('./filter')

const items =[1,2,3,4,5,5]

const res = filter(items,(value)=>{
    return value <4
    
})

// const res = filter(items,(value)=>{
//     return value >8
    
// })
console.log(res);



