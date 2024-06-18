const input = require('fs').readFileSync(0).toString().trim();

// 100 ms
let str = '';
for (let i = 0; i < input / 4; i++) {
  str += 'long ';
}
console.log(str + 'int');

// 120 ms
// const arr = [];
// for (let i = 0; i < input / 4; i++) {
//   arr[arr.length] = 'long ';
// }
// console.log(arr.join('') + 'int');
