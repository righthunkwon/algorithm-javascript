const input = require('fs').readFileSync(0).toString().trim().split(' ');
const [A, B, C] = input.map((item) => Number(item));
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
