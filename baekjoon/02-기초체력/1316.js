const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
let answer = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const letter = [];
  let flag = true;

  for (let j = 0; j < word.length; j++) {
    // 해당 문자가 처음 나왔을 경우
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    }
    // 해당 문자가 기존에 이미 나왔던 경우
    else {
      // 해당 문자가 마지막에 추가된 게 아닐 때, 즉 그룹 단어가 아닐 때
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    answer++;
  }
}
console.log(answer);
