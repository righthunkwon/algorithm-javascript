const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const arr = input[1]
  .split(' ')
  .sort((a, b) => a - b)
  .map((item) => parseInt(item));

console.log(`${arr[0]} ${arr[N - 1]}`);
