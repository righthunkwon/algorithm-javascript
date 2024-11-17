const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n').map(Number);
input.shift();
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
