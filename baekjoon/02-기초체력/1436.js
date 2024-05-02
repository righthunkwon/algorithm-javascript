// 영화감독 숌
const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let num = 666;
let count = 1;
while (count !== N) {
  num++;
  if (num.toString().includes('666')) {
    count++;
  }
}
console.log(num);
