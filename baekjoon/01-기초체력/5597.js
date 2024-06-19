const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const arr = Array(31).fill(false);
input.forEach((v) => {
  arr[v] = true;
});
for (let i = 1; i <= 30; i++) {
  if (!arr[i]) console.log(i);
}
