const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => parseInt(item));

let arr = [];

input.forEach((item) => {
  const num = item % 42;

  // 기존에 없을 경우 배열에 저장
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
});

console.log(arr.length);
