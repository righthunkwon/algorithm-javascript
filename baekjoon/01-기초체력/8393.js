const input = require('fs').readFileSync(0).toString().trim();

let sum = 0;
let n = Number(input);

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

console.log((n * (n + 1)) / 2);
