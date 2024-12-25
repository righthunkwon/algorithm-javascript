const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.forEach((elm) => {
  const [A, B, C] = elm.split(' ').map(Number);
  console.log(Math.max(C - B, B - A) - 1);
});
