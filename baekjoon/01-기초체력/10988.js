const input = require('fs').readFileSync(0).toString().trim();
const reverse = input.split('').reverse().join('');
console.log(input === reverse ? 1 : 0);
