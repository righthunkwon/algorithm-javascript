const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  let [st, ed, k] = input[i].split(' ').map(Number);
  for (st; st <= ed; st++) {
    arr[st - 1] = k;
  }
}

console.log(arr.join(' '));
