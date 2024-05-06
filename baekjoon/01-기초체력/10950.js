const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let sum = 0;
  input[i]
    .trim()
    .split(' ')
    .forEach((item) => (sum += parseInt(item)));
  console.log(sum);
}
