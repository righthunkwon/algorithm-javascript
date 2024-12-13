const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

const [N, M] = input.shift().split(' ').map(Number);
const set = new Set(input);
console.log(input.length - set.size);

const ans = [];
input.forEach((v) => {
  if (set.has(v)) {
    set.delete(v);
  } else {
    ans.push(v);
  }
});

console.log(ans.sort().join('\n'));
