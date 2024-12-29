const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
let minusOne = 0;
let zero = 0;
let plusOne = 0;

const paper = input.slice(1).map((v) => v.split(' ').map(Number));

const recursion = (x, y, size) => {
  if (checkColor(x, y, size)) {
    if (paper[x][y] === -1) minusOne++;
    else if (paper[x][y] === 0) zero++;
    else if (paper[x][y] === 1) plusOne++;
    return;
  }

  recursion(x, y, size / 3);
  recursion(x, y + size / 3, size / 3);
  recursion(x + size / 3, y + (size / 3) * 2, size / 3);
  recursion(x + size / 3, y, size / 3);
  recursion(x + size / 3, y + size / 3, size / 3);
  recursion(x, y + (size / 3) * 2, size / 3);
  recursion(x + (size / 3) * 2, y, size / 3);
  recursion(x + (size / 3) * 2, y + size / 3, size / 3);
  recursion(x + (size / 3) * 2, y + (size / 3) * 2, size / 3);
};

const checkColor = (x, y, size) => {
  const standard = paper[x][y]; // 기준색

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== standard) {
        return false;
      }
    }
  }
  return true;
};
recursion(0, 0, N);
console.log(`${minusOne}\n${zero}\n${plusOne}`);
