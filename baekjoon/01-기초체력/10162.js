const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
let input = +require('fs').readFileSync(filePath).toString().trim();

let answer = '';
answer += Math.floor(input / 300) + ' ';
input %= 300;
answer += Math.floor(input / 60) + ' ';
input %= 60;
answer += Math.floor(input / 10);
input %= 10;

if (input !== 0) {
  answer = -1;
}

console.log(answer);
