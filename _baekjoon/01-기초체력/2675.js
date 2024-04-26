let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  let P = '';
  let [R, S] = input[i].split(' ');

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      P += S[j];
    }
  }

  console.log(P);
}
