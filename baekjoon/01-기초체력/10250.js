const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let [H, W, N] = input[i].split(' ');
  let floor = Math.ceil(N % H).toString();
  let roomNumber = Math.ceil(N / H).toString();

  if (floor === '0') {
    floor = H;
  }
  if (roomNumber < 10) {
    roomNumber = '0' + roomNumber;
  }
  console.log(floor + roomNumber);
}
