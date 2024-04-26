let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((item) => parseInt(item));

let max = input[0]; // 최대값
let ans = 0; // 최대값의 인덱스

for (let i = 0; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    ans = i;
  }
}

console.log(max);
console.log(ans + 1);
