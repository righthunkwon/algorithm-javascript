// 팰린드롬수
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
  let reverse = input[i].split('').reverse().join('');
  console.log(input[i] === reverse ? 'yes' : 'no');
}
