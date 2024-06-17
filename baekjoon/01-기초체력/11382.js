const input = require('fs').readFileSync(0).toString().trim();
const [A, B, C] = input.split(' ').map(Number);
console.log(A + B + C);
