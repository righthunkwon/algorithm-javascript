const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  let ans = 1;

  for (let j = 0; j < b; j++) {
    ans = (ans * a) % 10;
  }
  console.log(ans === 0 ? 10 : ans);
}
