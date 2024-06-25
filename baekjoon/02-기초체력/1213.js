/**
 * 팰린드롬 만들기
 *
 * 팰린드롬을 구성하기 위해서는
 * 문자열 중 개수가 홀수인 문자의 개수는 하나이거나 없어야 한다.
 *
 * 팰린드롬의 구조는 크게 머리, 몸통, 꼬리로 나뉜다.
 * 홀수 개인 문자가 없이 모두 짝수 개로 이루어진 문자라면 몸통은 없을 수도 있다.
 *
 *
 * 주어진 문자열을 배열화 후 오름차순 정렬하고 해당 배열을 반복문을 돌면서
 * shift()하여 첫 번째 부분을 머리(head)의 배열에 push()한다.
 *
 * shift()한 요소의 인덱스를 찾을 수 없을 때 (indexOf 값이 -1일 때),
 * 해당 값은 몸통(body)에 넣는다.
 *
 * 꼬리(tail) 배열은 머리 배열을 반대로 뒤집은 것과 동일하기에,
 * 꼬리 배열을 깊은 복사하여 reverse()한다.
 *
 * 만약 몸통(body)의 길이가 2이상이면 해당 문자열은 팰린드롬을 만들 수 없다.
 *
 */

const input = require('fs').readFileSync(0).toString().trim().split('').sort();
const [head, body] = [[], []];
while (input.length) {
  const first = input.shift();
  const idx = input.indexOf(first);
  if (idx === -1) {
    body.push(first);
  } else {
    head.push(first);
    input.splice(idx, 1);
  }
}
const tail = [...head].reverse();
if (body.length > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  console.log(head.join('') + body.join('') + tail.join(''));
}
