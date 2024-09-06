const arrayOfObjects = require('./persons.js');

//  Question -1
function getEmail(){

    const emails =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {   
            emails.push(arrayOfObjects[i].email);
        }    
       return emails;
    }

// Question -2
function getHobby( age){
    if (age === undefined || age === null) {
        return "Please enter an age.";
    }
   
    let found = false
    const hobby =[]
        for (let i = 0; i < arrayOfObjects.length; i++) {
            
            if(arrayOfObjects[i].age === age){
                hobby.push(arrayOfObjects[i].hobbies);
                found = true;  
            }     
        }
       
        if (!found) {
            return "No age found";
        }
       
       return hobby;
    }

// Question -3

function getNames(Country){

    if (typeof Country !== 'string') {
        return `Invalid country parameter`;
    }

    const newnames =[]
    let found = false;
    for (let i = 0; i < arrayOfObjects.length; i++) {
        
        if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country ===Country){
            newnames.push(arrayOfObjects[i].name);
            found = true;
        }  
    }
    if (!found) {
        return `No data found in this name `;
    }
    return newnames;
}    
   



module.exports = { getEmail, getHobby, getNames};