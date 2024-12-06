const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const targets = input[3].split(' ').map(Number);

function binarySearch(target) {
  let st = 0;
  let ed = N - 1;

  while (st <= ed) {
    const md = Math.floor((st + ed) / 2);
    if (target === cards[md]) {
      return 1;
    } else if (target > cards[md]) {
      st = md + 1;
    } else {
      ed = md - 1;
    }
  }
  return 0;
}
let result = [];
for (const target of targets) {
  result.push(binarySearch(target));
}
console.log(result.join(' '));

// const cards = new Set(input[1].split(' '));
// const targets = input[3].split(' ');
// const result = [];
// for (const target of targets) {
//   cards.has(target) ? result.push(1) : result.push(0);
// }
// console.log(result.join(' '));
