const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const applicants = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

let total = 0;
for (const applicant of applicants) {
  total += Math.ceil(applicant / T);
}

console.log(total);
console.log(Math.floor(N / P), N % P);
