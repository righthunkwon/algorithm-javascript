const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

// const K = input.shift();
const stack = [];

for (let item of input) {
  if (item === 0) stack.pop();
  else stack.push(item);
}

let sum = 0;
for (let item of stack) {
  sum += item;
}

console.log(sum);
