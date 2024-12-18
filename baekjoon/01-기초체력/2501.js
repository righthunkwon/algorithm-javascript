const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [N, K] = input;

function solve() {
  let cnt = 0; // 약수의 개수
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) cnt++;
    if (cnt === K) return i;
  }
  if (cnt < K) return 0;
}

console.log(solve());
