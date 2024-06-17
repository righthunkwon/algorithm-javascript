const input = require('fs').readFileSync(0).toString().trim().split('\n');
const X = Number(input[0]);
const N = Number(input[1]);
let sum = 0;

for (let i = 0; i < N; i++) {
  const [price, cnt] = input[i + 2].split(' ').map(Number);
  sum += price * cnt;
}

if (X === sum) {
  console.log('Yes');
} else {
  console.log('No');
}
