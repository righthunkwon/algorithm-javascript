const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, X] = input[0].split(' ').map((item) => +item);
const arr = input[1].split(' ').map((item) => +item);

let result = '';
for (i = 0; i < N; i++) {
  if (arr[i] < X) {
    result += arr[i] + ' ';
  }
}

console.log(result);
