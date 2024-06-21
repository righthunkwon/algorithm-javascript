const input = require('fs').readFileSync(0).toString().trim();
const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
const arr = input.split('');
let answer = 0;
for (let key in dial) {
  for (let i = 0; i < arr.length; i++) {
    if (key.includes(arr[i])) {
      answer += dial[key];
    }
  }
}
console.log(answer);
