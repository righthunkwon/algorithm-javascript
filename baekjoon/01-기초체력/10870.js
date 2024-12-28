const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const solve = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  const dp = [0, 1];
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[num];
};
console.log(solve(input));
