const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

let answer = 0;
let row = 0;
let col = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (answer < input[i][j]) {
      answer = input[i][j];
      row = i;
      col = j;
    }
  }
}
console.log(`${answer}\n${row + 1} ${col + 1}`);
