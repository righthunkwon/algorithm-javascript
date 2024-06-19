const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [A, B, C] = input;
console.log(Number(A) + Number(B) - C);
console.log(A + B - C);
