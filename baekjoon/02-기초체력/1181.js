// 단어 정렬
const fs = require('fs');
const [N, ...words] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

ans = Array.from(new Set(words)).sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }
});
console.log(ans.join('\n'));
