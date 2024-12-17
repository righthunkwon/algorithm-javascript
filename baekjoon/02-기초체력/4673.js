const arr = [];
const answer = [];

for (let i = 1; i <= 10000; i++) {
  let num = i;
  let numByDigit = String(i);
  for (let j = 0; j < numByDigit.length; j++) {
    num += Number(numByDigit[j]);
  }
  arr.push(num);
}

for (let i = 1; i <= 10000; i++) {
  if (arr.indexOf(i) === -1) {
    answer.push(i);
  }
}

console.log(answer.join('\n'));
