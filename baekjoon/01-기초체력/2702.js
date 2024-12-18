const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.splice(1);
const answer = [];

for (let tc of arr) {
  const [a, b] = tc
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a); // 정렬

  let i = a;
  let j = b;

  while (i % j !== 0) {
    let r = i % j;
    if (r !== 0) {
      i = j;
      j = r;
    }
  }

  answer.push(`${(a * b) / j} ${j}`);
}

/**
 * case마다 console찍는 거보다
 * answer.join() 걸어주는 게 속도가 훨씬 빠르다
 *
 * */
console.log(answer.join('\n'));
