const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, F] = input;

let answer = 0;
let number = Math.floor(N / 100) * 100;
while (true) {
  if (number % F == 0) {
    answer = number;
    break;
  } else {
    number++;
  }
}
console.log(String(answer).slice(-2));
