const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const ans = [];
const len = input.shift();
for (let i = 0; i < len; i++) {
  let cnt = 0;

  for (let item of input[i]) {
    if (item === '(') cnt++;
    else cnt--;

    if (cnt < 0) break;
  }

  ans.push(cnt === 0 ? 'YES' : 'NO');
}

console.log(ans.join('\n'));
