const input = require('fs').readFileSync(0).toString().trim();
const ans = [];

for (let i = 97; i <= 122; i++) {
  ans.push(input.indexOf(String.fromCharCode(i)));
}

console.log(ans.join(' '));
