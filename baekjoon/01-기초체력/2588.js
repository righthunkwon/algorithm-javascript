const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [A, B] = input.map((item) => Number(item));

console.log(A * input[1][2]);
console.log(A * input[1][1]);
console.log(A * input[1][0]);
console.log(A * B);
