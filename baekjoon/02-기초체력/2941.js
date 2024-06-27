const input = require('fs').readFileSync(0).toString().trim().split('');
const croatiaAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let answer = 0;

while (true) {
  if (croatiaAlphabet.includes(input.slice(0, 3).join(''))) {
    input.splice(0, 3);
    answer++;
  } else if (croatiaAlphabet.includes(input.slice(0, 2).join(''))) {
    input.splice(0, 2);
    answer++;
  } else {
    input.splice(0, 1);
    answer++;
  }

  if (input.length === 0) {
    console.log(answer);
    break;
  }
}
