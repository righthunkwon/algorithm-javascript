const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [N, K] = input;

const solve = (N, K) => {
  // 배열 생성
  const arr = [];
  const queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  // 요세푸스 순열
  let cnt = 1;
  while (queue.length > 0) {
    const item = queue.shift();

    if (cnt % K === 0) {
      arr.push(item);
    } else {
      queue.push(item);
    }
    cnt++;
  }

  const answer = `<${arr.join(', ')}>`;
  return answer;
};

console.log(solve(N, K));
