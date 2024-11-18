const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n');

const arrX = [];
const arrY = [];

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  arrX.push(a);
  arrY.push(b);
}
arrX.sort((a, b) => a - b);
arrY.sort((a, b) => a - b);

const ansX = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
const ansY = arrY[0] === arrY[1] ? arrY[2] : arrY[0];
console.log(`${ansX} ${ansY}`);
