const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, X] = input[0].split(' ').map((item) => +item);
const arr = input[1].split(' ').map((item) => +item);

const result = arr.filter((item) => item < X);
console.log(result.join(' '));
