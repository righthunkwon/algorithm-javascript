const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
let input = +require('fs').readFileSync(filePath).toString().trim();
let arr = [300, 60, 10];
let answer = '';
arr.forEach((elm) => {
  answer += Math.floor(input / elm) + ' ';
  input %= elm;
});
if (input !== 0) answer = -1;
console.log(answer);
