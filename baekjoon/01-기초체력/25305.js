const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n');
const [N, k] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr[arr.length - k]);
