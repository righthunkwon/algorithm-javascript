const input = require('fs').readFileSync(0).toString().trim();
const N = +input;
let ans = '';

for (let i = 1; i <= N; i++) {
  ans += i + '\n';
}
console.log(ans);
