const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const basket = [];
for (let i = 1; i <= N; i++) {
  basket.push(i);
}

for (let i = 1; i <= M; i++) {
  const [st, ed] = input[i].split(' ');
  const arr = [];
  for (let j = st - 1; j < ed; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(st - 1, ed - st + 1, ...arr);
}
console.log(basket.join(' '));
