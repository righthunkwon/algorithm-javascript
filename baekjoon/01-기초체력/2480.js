const input = require('fs').readFileSync(0).toString().trim();
const [A, B, C] = input
  .split(' ')
  .map(Number)
  .sort((x, y) => x - y);

// 경우의 수를 비교해야 할 때는 정렬을 먼저 해보자
if (A === B && A === C) {
  console.log(10000 + A * 1000);
} else if (A === B || B === C) {
  console.log(1000 + B * 100);
} else {
  console.log(C * 100);
}
