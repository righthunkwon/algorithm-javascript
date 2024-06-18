const input = require('fs').readFileSync(0).toString().trim().split('\n');
let T = Number(input[0]);

// 1428ms
// let ans = '';
// for (let i = 1; i < input.length; i++) {
//   const [A, B] = input[i].split(' ').map(Number);
//   ans += A + B + '\n';
// }
// console.log(ans);

// 1260ms
let ans = '';
for (let i = 1; i < input.length; i++) {
  line = input[i].split(' ');
  ans += Number(line[0]) + Number(line[1]) + '\n';
}
console.log(ans);
