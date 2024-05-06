const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((item) => +item);

const ans = input.map((item) => item * item).reduce((acc, cur) => acc + cur) % 10;
console.log(ans);
