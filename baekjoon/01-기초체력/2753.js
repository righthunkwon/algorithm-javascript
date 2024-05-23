const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const year = +input;

if (year % 4 !== 0) {
  console.log(0);
} else {
  if (year % 400 === 0) {
    console.log(1);
  } else if (year % 100 === 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}
