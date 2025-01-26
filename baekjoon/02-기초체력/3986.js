const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
let ans = 0;

for (let elem of input) {
  const word = elem.trim();
  const stack = [];

  // 스택의 마지막 문자와 순회하는 문자가 동일할 경우 짝을 이룸
  stack.push(word.slice(0, 1));
  for (let letter of word.slice(1)) {
    if (letter === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  // 스택이 비어있을 경우 좋은 단어
  if (stack.length === 0) {
    ans++;
  }
}

console.log(ans);
