const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n');
let idx = 0;
while (true) {
  const [a, b, c] = input[idx].split(' ').map(Number);
  if (a === 0 && (b === 0) & (c === 0)) {
    break;
  }

  const sides = [a, b, c].sort((a, b) => a - b);
  const [side1, side2, hypotenuse] = sides;

  if (hypotenuse ** 2 === side1 ** 2 + side2 ** 2) {
    console.log('right');
  } else {
    console.log('wrong');
  }
  idx++;
}
