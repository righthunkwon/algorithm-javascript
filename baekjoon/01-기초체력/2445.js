const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 1; i <= N; i++) {
  let stars1 = '*'.repeat(i);
  let blank = ' '.repeat(2 * (N - i));
  let stars2 = '*'.repeat(i);
  console.log(stars1 + blank + stars2);
}

for (let i = N - 1; i > 0; i--) {
  let stars1 = '*'.repeat(i);
  let blank = ' '.repeat(2 * (N - i));
  let stars2 = '*'.repeat(i);
  console.log(stars1 + blank + stars2);
}
