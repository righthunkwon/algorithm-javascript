const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((item) => parseInt(item));

const [H, M] = input;
if (M < 45) {
  if (H === 0) {
    console.log(H + 23, 60 - 45 + M);
  } else {
    console.log(H - 1, 60 - 45 + M);
  }
} else {
  console.log(H, M - 45);
}
