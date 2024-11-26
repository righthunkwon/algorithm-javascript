const input = +require('fs').readFileSync('tc.txt').toString().trim();
console.log(input * (input - 1));
