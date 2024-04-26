let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toUpperCase();

let arr = Array(26).fill(0);

for (let letter of input) {
  let idx = letter.charCodeAt() - 65; // A: 65
  arr[idx] += 1;
}

let max = Math.max(...arr);
let maxCnt = arr.filter((item) => item === max).length;

let idx = arr.indexOf(max);
let ans = String.fromCharCode(idx + 65);

console.log(maxCnt === 1 ? ans : '?');
