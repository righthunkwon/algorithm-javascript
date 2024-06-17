const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [A, B] = input.map((item) => Number(item));

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else {
  console.log(4);
}
