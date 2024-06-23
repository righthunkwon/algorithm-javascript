const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 1; i <= N; i++) {
  let blank = ' '.repeat(N - i);
  let stars = '*'.repeat(2 * i - 1);
  console.log(blank + stars);
}
