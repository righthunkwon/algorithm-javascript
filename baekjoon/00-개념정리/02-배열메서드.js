////////////////////////////////////////////////////////////////////////
// join()
// join('')을 가장 많이 사용
// 배열의 모든 요소를 지정된 구분 문자열로 구분하여 연결된 새 문자열 반환

const arr1 = ['Fire', 'Air', 'Water'];

console.log(arr1.join()); // "Fire,Air,Water"
console.log(arr1.join('')); // "FireAirWater"
console.log(arr1.join('-')); // "Fire-Air-Water"

////////////////////////////////////////////////////////////////////////
// reverse()
// 배열의 순서를 반전
// 원본 배열을 수정함에 유의(destructive)
const arr2 = ['one', 'two', 'three'];

console.log(arr2); // ["one", "two", "three"]
console.log(arr2.reverse()); //  ["three", "two", "one"]
console.log(arr2); // ["three", "two", "one"]

////////////////////////////////////////////////////////////////////////
// reduce()
// acc: 누산기, cur: 현재 값
// 배열의 각 요소에 대해 주어진 함수를 실행하고 하나의 결과값을 반환
// 초기값(initVal) 없이 reduce()를 호출하면 오류 발생
const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, cur) => acc + cur);
console.log(sum); // 10

const initVal = 10;
const sumWithInitVal = arr3.reduce((acc, cur) => acc + cur, initVal);
console.log(sumWithInitVal); // 20
