const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let cnt = 0;
for (let i = 0; i < 7; i++) {
  if (input[i] < input[i + 1]) {
    cnt++;
  }
}

if (cnt === 0) {
  console.log('descending');
} else if (cnt === 7) {
  console.log('ascending');
} else {
  console.log('mixed');
}
