const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const dictionary = input.slice(1, N + 1).map((v) => v.trim());
const question = input.slice(1 + N);

const map = new Map(dictionary.map((v, i) => [v, i + 1]));
const answer = [];

question.forEach((v) => {
  if (Number.isNaN(+v)) {
    answer.push(map.get(v));
  } else {
    answer.push(arr[+v - 1]);
  }
});
console.log(answer);
console.log(answer.join('\n'));
