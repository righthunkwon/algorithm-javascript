/**
 * @분할정복_예제_백준_2630번
 *
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const paper = input.slice(1).map((v) => v.split(' ').map(Number));
let white = 0;
let blue = 0;

// 재귀호출 함수
const recursion = (x, y, size) => {
  // 색이 같을 경우 색종이 개수 증가
  if (checkColor(x, y, size)) {
    if (paper[x][y] === 0) white++;
    else if (paper[x][y] === 1) blue++;
    return;
  }

  // 색이 같지 않을 경우 재탐색(분할정복)
  const newSize = size / 2;
  recursion(x, y, newSize); // 제1사분면
  recursion(x, y + newSize, newSize); // 제2사분면
  recursion(x + newSize, y, newSize); // 제3사분면
  recursion(x + newSize, y + newSize, newSize); // 제4사분면
};

// 색이 같은지 여부를 검사하는 함수
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
console.log(`${white}\n${blue}`);
