const {each} = require('./each')

const items =[1,2,3,4,5,5]

each(items,(elem, index)=>{
    console.log(`element is : ${elem} and index is : ${index}`);
    

})