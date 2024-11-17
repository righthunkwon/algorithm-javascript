const input = Number(require('fs').readFileSync('tc.txt').toString().trim());
const res = (2 ** input + 1) ** 2;
console.log(res);
