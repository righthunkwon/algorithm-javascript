/**
 * @유클리드호재법
 * 자연수 두 개의 최대공약수를 구하는 알고리즘
 *
 * 두 수 a와 b 중 a를 b로 나눈 나머지를 r이라 한다면(단, a > b)
 * a와 b의 최대공약수는 b와 r의 최대공약수와 같다는 점을 이용하여
 * 나머지를 구하는 과정을 반복하면 나머지가 0이 되었을 때 나누는 수가 바로 a와 b의 최대공약수
 *
 */

/**
 * @예제
 *
 * 1071 % 1029 = 42
 * 1029 % 42 = 21
 * 42 % 21 = 0
 *
 * => 1071과 1029의 최대공약수는 21
 *
 */

/**
 * @최소공배수
 * 두 수의 곱 / 최대공약수
 *
 */
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [a, b] = input.sort((a, b) => b - a);
let i = a;
let j = b;

while (i % j !== 0) {
  let r = i % j;
  if (r !== 0) {
    i = j;
    j = r;
  }
}
console.log(j);
console.log((a * b) / j);
