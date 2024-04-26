let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let arr = input[1].split('').map((item) => parseInt(item));
let ans = 0;

for (let i = 0; i < N; i++) {
  ans += arr[i];
}

console.log(ans);
