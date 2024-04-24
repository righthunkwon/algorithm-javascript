// 별 찍기 - 1
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let star = '';
for (let i = 0; i < input; i++) {
  star += '*';
  console.log(star);
}
