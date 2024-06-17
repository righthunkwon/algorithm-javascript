const input = require('fs').readFileSync(0).toString().trim().split('\n');
let [currHour, currMin] = input[0].split(' ').map(Number);
let cookTime = Number(input[1]);

currMin += cookTime;

// 점진적인 변화가 있을 때는 while문을 활용해보자
while (currMin >= 60) {
  currMin -= 60;
  currHour += 1;
}

currHour %= 24;

console.log(currHour, currMin);
