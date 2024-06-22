const input = require('fs').readFileSync(0).toString().trim().split('\n');
const maxLength = Math.max(...input.map((item) => item.length));
let answer = '';
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] ?? '';
  }
}
console.log(answer);
