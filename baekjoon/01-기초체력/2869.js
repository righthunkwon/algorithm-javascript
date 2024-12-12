const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));
