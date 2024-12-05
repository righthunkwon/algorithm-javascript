const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const cards = new Set(input[1].split(' '));
const targets = input[3].split(' ');
const result = [];

for (const target of targets) {
  cards.has(target) ? result.push(1) : result.push(0);
}

console.log(result.join(' '));
