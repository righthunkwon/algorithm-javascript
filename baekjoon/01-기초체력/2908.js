const input = require('fs').readFileSync(0).toString().trim();
let [A, B] = input.split(' ');
A = A.split('').reverse().join('');
B = B.split('').reverse().join('');
console.log(A > B ? A : B);
