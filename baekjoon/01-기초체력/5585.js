const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const bill = 1000;
const coins = [500, 100, 50, 10, 5, 1];
let change = bill - input;
let coinCnt = 0;

for (let i = 0; i < coins.length; i++) {
  let quota = Math.floor(change / coins[i]);
  change -= quota * coins[i];
  coinCnt += quota;
}
console.log(coinCnt);

// while (change > 0) {
//   if (change >= 500) {
//     change -= 500;
//     coinCnt++;
//   } else if (change >= 100) {
//     change -= 100;
//     coinCnt++;
//   } else if (change >= 50) {
//     change -= 50;
//     coinCnt++;
//   } else if (change >= 10) {
//     change -= 10;
//     coinCnt++;
//   } else if (change >= 5) {
//     change -= 5;
//     coinCnt++;
//   } else if (change >= 1) {
//     change -= 1;
//     coinCnt++;
//   }
// }
// console.log(coinCnt);
