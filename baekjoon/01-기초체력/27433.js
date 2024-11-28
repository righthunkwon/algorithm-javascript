const input = Number(require('fs').readFileSync('tc.txt').toString().trim());
const factorial = (n) => {
  // 기저조건(종료조건): 0!, 1!
  if (n === 0 || n === 1) {
    return 1;
  }
  //반복수행(재귀함수)
  return n * factorial(n - 1);
};
console.log(factorial(input));
