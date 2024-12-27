const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

let ans = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= arr[i + 1]) ans++;
}
console.log(ans);
