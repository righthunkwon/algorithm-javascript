const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const len = input.shift();
const ans = [];
const stack = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case 'pop':
      ans.push(stack.pop() || -1);
      break;

    case 'size':
      ans.push(stack.length);
      break;

    case 'empty':
      ans.push(stack[0] ? 0 : 1);
      break;

    case 'top':
      ans.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(input[i].split(' ')[1]);
      break;
  }
}
console.log(ans.join('\n'));
