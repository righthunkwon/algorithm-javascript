////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// join()
// join(구분자), 배열의 모든 요소를 지정된 구분 문자열로 구분하여 연결된 새 문자열 반환
const arr1 = ['Fire', 'Air', 'Water'];

console.log(arr1.join()); // "Fire,Air,Water" (join의 구분자 기본값은 ,임에 유의)
console.log(arr1.join('')); // "FireAirWater"
console.log(arr1.join(' ')); // "Fire Air Water"
console.log(arr1.join('-')); // "Fire-Air-Water"
console.log(arr1.join('\n')); // "Fire
////////////////////////////////  Air
////////////////////////////////  Water"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reverse()
// 배열의 순서를 반전, 원본 배열을 수정함에 유의(destructive)
const arr2 = ['one', 'two', 'three'];

console.log(arr2); // ["one", "two", "three"]
console.log(arr2.reverse()); //  ["three", "two", "one"]
console.log(arr2); // ["three", "two", "one"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// reduce()
// 배열의 각 요소에 대해 주어진 함수를 실행하고 하나의 결과값을 반환

// reduce((acc, cur, index, arr) => {return}, initialValue)
// acc: 누산기, cur: 현재 값 두 가지는 필수 값, 이외의 값은 선택 값

// 콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가짐
// 1) 초기값을 제공한 경우 - acc는 초기값, cur은 배열의 첫번째 값
// 2) 초기값을 제공하지 않는 경우 - acc는 배열의 첫번째 값, cur은 배열의 두 번째 값
// 초기값을 제공하지 않을 경우 acc와 cur은 각각 배열의 첫번째, 두번째 값임을 기억하자.

const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, cur) => acc + cur);
console.log(sum); // 10

const initVal = 10;
const sumWithInitVal = arr3.reduce((acc, cur) => acc + cur, initVal);
console.log(sumWithInitVal); // 20

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// filter()
// 배열에서 제공된 함수의 조건을 만족하는 요소를 필터링해서 배열의 복사본 생성
const arr4 = ['apple', 'melon', 'orange', 'watermelon', 'strawberry'];
const arr5 = arr4.filter((item) => item.length > 6);
console.log(arr4); // ['apple', 'melon', 'orange', 'watermelon', 'strawberry']
console.log(arr5); // ['watermelon', 'strawberry']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// at()
// 해당하는 인덱스에 있는 항목을 반환, 음의 정수의 경우 배열의 마지막 항목부터 거슬러 셈
const arr6 = ['apple', 'melon', 'orange', 'watermelon', 'strawberry'];
console.log(arr6.at(1)); // melon
console.log(arr6.at(-1)); // strawberry
console.log(arr6[arr6.length - 1]); // strawberry

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// includes()
// 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 true 혹은 false 반환
const arr7 = ['apple', 'melon', 'orange', 'watermelon', 'strawberry'];
console.log(arr7.includes('apple')); // true
console.log(arr7.includes('apples')); // false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// indexOf()
// 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 찾을 수 없으면 -1 반환
const arr8 = ['pencil', 'pen', 'ruler', 'pen'];
console.log(arr8.indexOf('pen')); // 1
console.log(arr8.indexOf('cup')); // -1
console.log(arr8.indexOf('pen', 1)); // 1
console.log(arr8.indexOf('pen', 2)); // 3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// findIndex()
// 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 찾을 수 없으면 -1 반환
// indexOf()와 동일해 보이지만, indexOf()와 달리 배열의 요소가 객체로 이루어져 있어도 원하는 요소 탐색 가능
const arr9 = [
  { id: 1, color: 'green' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'purple' },
];
console.log(arr9.indexOf(2)); // -1
console.log(arr9.indexOf('blue')); // -1
console.log(arr9.findIndex((elm) => elm.id === 2)); // 1
console.log(arr9.findIndex((elm) => elm.color === 'blue')); // 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// find()
// 배열에서 주어진 요소를 찾을 수 있는 첫 번째 값을 반환하고 찾을 수 없으면 -1 반환
const arr10 = [
  { id: 1, color: 'green' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'purple' },
];
console.log(arr10.find((elm) => elm.id === 2)); // { id: 2, color: 'blue' }
console.log(arr10.find((elm) => elm.color === 'blue')); // { id: 2, color: 'blue' }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// slice()
// 배열의 시작인덱스부터 끝인덱스까지(이상/미만) 얕은 복사본을 만들어 새로운 배열 객체 반환
const arr11 = [
  { id: 1, color: 'green' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'purple' },
  { id: 4, color: 'yellow' },
];
const slicedArray = arr11.slice(1, 3);
console.log(arr11); // [ { id: 1, color: 'green' }, { id: 2, color: 'blue' }, { id: 3, color: 'purple' }, { id: 4, color: 'yellow' } ]
console.log(slicedArray); // [ { id: 2, color: 'blue' }, { id: 3, color: 'purple' } ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// concat()
// 두 개 이상의 배열을 병합
const arr12 = ['one', 'two'];
const arr13 = ['three', 'four'];
console.log(arr12.concat(arr13)); // [ 'one', 'two', 'three', 'four' ]
