const input = require('fs').readFileSync(0).toString().trim();
const reverseInput = input.split('').reverse().join('');

if (input === reverseInput) {
  console.log(input.length);
  return;
}

for (let i = 1; i < input.length; i++) {
  const arr = input.split('').slice(i).join('');
  const reverseArr = input.split('').slice(i).reverse().join('');

  if (arr === reverseArr) {
    console.log(input.length + i);
    return;
  }
}
