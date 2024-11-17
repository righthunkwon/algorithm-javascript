const input = Number(require('fs').readFileSync('tc.txt').toString().trim());

let block = 1; // 총 블록수
let distance = 1; // 이동거리(지나가는 방의 수)
while (block < input) {
  block += 6 * distance;
  distance++;
}
console.log(distance);
