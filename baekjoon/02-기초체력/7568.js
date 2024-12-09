const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = input.slice(1, input.length).map((el) => el.split(' ').map(Number));
const result = [];

for (let i = 0; i < arr.length; i++) {
  let grade = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      // 키와 몸무게 둘 다 크지 않다면 등수 증가
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
    }
  }
  result.push(grade);
}
console.log(result.join(' '));
