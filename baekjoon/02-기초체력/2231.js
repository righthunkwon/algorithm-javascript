// 분해합
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = +input;

for (let num = 1; num <= N; num++) {
  const sum = String(num)
    .split('')
    .map((item) => +item)
    .reduce((acc, cur) => acc + cur, num);

  // 분해합(sum)의 결과가 N일 경우 생성자(num)를 출력
  if (sum === N) {
    console.log(num);
    break;
  }

  // N까지 생성자(num)의 경우의 수를 고려했을 때도 만들 수 없다면 0출력
  if (num === N) {
    console.log(0);
  }
}
