let fs = require('fs');
let input = fs.readFileSync('../testcase.txt').toString().split(' ');
console.log(parseInt(input[0]) - parseInt(input[1]));
