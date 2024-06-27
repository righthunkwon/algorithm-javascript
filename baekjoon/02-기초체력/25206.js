const input = require('fs').readFileSync(0).toString().trim().split('\n');
const grades = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0;
let total = 0;

for (let i = 0; i < input.length; i++) {
  const [subject, credit, grade] = input[i].split(' ');
  if (grade === 'P') {
    continue;
  } else {
    sum += Number(credit) * grades[grade];
    total += Number(credit);
  }
}
console.log(sum / total);
