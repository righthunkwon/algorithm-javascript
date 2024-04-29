// 평균
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const scores = input[1].split(' ').map((item) => parseInt(item));
const max = Math.max(...scores);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += (scores[i] / max) * 100;
}

console.log(sum / N);
