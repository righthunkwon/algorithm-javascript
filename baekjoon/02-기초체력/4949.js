const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const ans = [];

for (let item of input) {
  const stack = [];
  let isBalanced = true;

  // 종료조건
  if (item === '.') {
    break;
  }

  // 문자열 순회
  for (let i = 0; i < item.length; i++) {
    // 1. 여는 괄호일 경우
    if (item[i] === '(' || item[i] === '[') {
      stack.push(item[i]);
    }
    // 2. 닫는 괄호일 경우
    else if (item[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    }
    // 3. 닫는 괄호일 경우
    else if (item[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    }
    // 4. 순회 종료 조건
    else if (item[i] === '.') {
      break;
    }
  }

  // 스택에 남은 괄호가 있거나 균형이 맞지 않을 경우 no
  if (stack.length > 0 || !isBalanced) {
    ans.push('no');
  } else {
    ans.push('yes');
  }
}

console.log(ans.join('\n'));
