// https://nyang-in.tistory.com/156
// vscode   : ../testcase.txt
// baekjoon : /dev/stdin

// 입력
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

// 한 줄 입력
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// // 여러 줄 입력
// const fs = require('fs');
// const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
