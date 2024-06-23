const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

for (let i = N; i > 0; i--) {
  let stars = '*'.repeat(i);
  console.log(stars);
}
