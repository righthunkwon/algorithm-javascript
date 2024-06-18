const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);

let ans = '';
for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  ans += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
}
console.log(ans);
