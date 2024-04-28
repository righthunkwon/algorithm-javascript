const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B, C] = input;
const num = (A * B * C).toString();

for (let i = 0; i <= 9; i++) {
  let ans = 0;

  for (let j = 0; j < num.length; j++) {
    if (parseInt(num[j]) === i) {
      ans++;
    }
  }

  console.log(ans);
}
