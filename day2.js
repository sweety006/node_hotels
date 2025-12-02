const fs = require('fs');
const os = require('os');
var _ = require('lodash');

//Problem : 2
// function calculateCircleArea(radius){
//   return Math.PI * radius ** 2;
// }
// console.log(calculateCircleArea(10))
// console.log(calculateCircleArea(5))
// console.log( calculateCircleArea(4.2))

//Problem : 3
// function performOperation(a,b, cb){
// return cb(a,b);
// }
// function add (a,b){
//   return a + b;
// }
// function subs (a,b){
//   return a - b;
// }
// function mult (a,b){
//   return a * b;
// }
// function div (a,b){
//     return a / b;
// }
// console.log(performOperation(5,10,add));
// console.log(performOperation(12,4,subs));
// console.log(performOperation(6,2,mult));
// console.log(performOperation(8,2,div));

//Problem : 4

// fs.readFile('notes.txt','utf8',(err,data) => {
//     if (err) {
//        console.error('Error handling file:', err);
//       return;
//     }
//     console.log(data)
// });

//Problem : 5
// console.log('Total Memory:',os.totalmem())
// console.log('Free Memory:',os.freemem())
// console.log('Opreating System Platform:',os.platform())
// console.log('Number of CPU cores:',os.cpus().length)

//Problem : 6
function evenSum(numbers){
const evenNumbers = _.filter(numbers, (num)=> num % 2 === 0)
return _.sumBy(evenNumbers)
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(evenSum(arr));