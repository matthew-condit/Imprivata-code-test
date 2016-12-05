// Code written by Matthew Condit
// 12/5/2016

var mergeArrays = require('./src/mergeArrays.js').mergeArraysFunctional;
var isPangram = require('./src/isPangram.js').isPangram;
var jumpingJack = require('./src/jump.js').jumpingJack;
var vaccinate = require('./src/who.js').vaccinate;

module.exports = {
    mergeArrays: mergeArrays,
    isPangram: isPangram,
    jumpingJack: jumpingJack,
    vaccinate: vaccinate
}


var array3 = [] , array4 = [];
for (var i = 0; i < 1000000; i++) {
    array3.push(i);
    array4.push(i);
}

console.time('MergeArrays');
var result = mergeArrays(array3, array4);
console.timeEnd('MergeArrays');

console.time('built in merge');
var builtin = array3.concat(array4);
array3.sort((a, b)=>a-b);
console.timeEnd('built in merge');

