const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr[i] = i;
}

for (let i = 1; i <= M; i++) {
  const [b1, b2] = input[i].split(' ').map(Number);
  const temp = arr[b1];
  arr[b1] = arr[b2];
  arr[b2] = temp;
}

console.log(arr.slice(1).join(' '));
