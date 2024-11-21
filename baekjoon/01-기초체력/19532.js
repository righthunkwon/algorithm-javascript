const input = require('fs').readFileSync('tc.txt').toString().trim().split(' ').map(Number);
const [a, b, c, d, e, f] = input;

for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${x} ${y}`);
    }
  }
}
