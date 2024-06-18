const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].trim().split(' ');
const v = input[2];

let ans = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === v) {
    ans++;
  }
}
console.log(ans);
