const input = require('fs').readFileSync(0).toString().trim();
const [A, B] = input.split(' ').map((item) => +item);
console.log(A * B);
