const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
let answer = 0;
const map = new Array(100).fill().map((item) => new Array(100).fill(0));
for (let i = 1; i <= T; i++) {
  const [startX, startY] = input[i].split(' ').map(Number);
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (map[startX + j][startY + k] !== 0) {
        continue;
      } else {
        map[startX + j][startY + k] = 1;
        answer++;
      }
    }
  }
}
console.log(answer);
