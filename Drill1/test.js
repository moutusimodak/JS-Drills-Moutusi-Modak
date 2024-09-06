const arrayOfObjects = require('./persons');
const {getEmail, getHobby} = require("./solution")

//q1
const emails = getEmail(arrayOfObjects);
 const emailList = emails.join('\n');
console.log(`The email address of all individuals are - ${emailList}`);

//q2

const hobby = getHobby(30);
console.log(`${hobby}`);
