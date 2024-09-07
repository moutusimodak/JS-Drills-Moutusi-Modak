const {flatten} = require('./flatten')

const nestedArray = [1, [2], [[3]], [[[4]]]];

const val = flatten(nestedArray)
console.log(val);