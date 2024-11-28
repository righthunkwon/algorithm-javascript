const input = require('fs').readFileSync('tc.txt').toString().trim().split('\n');
const testCase = Number(input.shift());

let cnt = 0; // 재귀함수 호출횟수
const recursion = (str, l, r) => {
  cnt++;
  // 기저조건(종료조건)
  if (l >= r) {
    // 문자열을 다 돈 경우 팰린드롬 O
    return 1;
  } else if (str[l] !== str[r]) {
    // 문자가 다른 경우 팰린드롬 X
    return 0;
  } else {
    // 다음 재귀 호출
    return recursion(str, l + 1, r - 1);
  }
};

const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1);
};

for (let i = 0; i < testCase; i++) {
  cnt = 0;
  console.log(isPalindrome(input[i].trim()), cnt);
}
