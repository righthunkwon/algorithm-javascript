const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const dict = input.slice(1, N + 1).map((v) => v.trim());
const ques = input.slice(N + 1).map((v) => v.trim());

dict.map((v, i) => {
  return [v, i + 1];
});

const map = new Map(dict.map((v, i) => [v, i + 1]));
const answer = [];

ques.forEach((v) => {
  if (Number.isNaN(+v)) {
    answer.push(map.get(v));
  } else {
    answer.push(dict[+v - 1]);
  }
});

console.log(answer.join('\n'));
