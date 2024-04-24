// 별 찍기 - 2
// 두 개의 반복문 사용
// 별의 개수와 공백의 개수의 연관성 고려
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let star = '';
let blank = '';

for (let i = 0; i < input; i++) {
  star += '*';
  for (let j = 1; j < input - i; j++) {
    blank += ' ';
  }
  console.log(blank + star);
  blank = '';
}
