// 소수 찾기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [N, nums] = input.split('\n');

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(nums.split(' ').filter((item) => isPrime(item)).length);
