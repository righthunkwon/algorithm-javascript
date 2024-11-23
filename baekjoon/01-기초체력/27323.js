const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n').map(Number);
const [A, B] = input;
console.log(A * B);
