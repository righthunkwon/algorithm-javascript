////////////////////////////////////////////////////////////////////////
// join()
// join(' ')을 가장 많이 사용
// 배열의 모든 요소를 지정된 구분 문자열로 구분하여 연결된 새 문자열 반환

const arr1 = ['Fire', 'Air', 'Water'];

console.log(arr1.join()); // "Fire,Air,Water"
console.log(arr1.join('')); // "FireAirWater"
console.log(arr1.join(' ')); // "Fire Air Water"
console.log(arr1.join('-')); // "Fire-Air-Water"
console.log(arr1.join('\n')); // "Fire
////////////////////////////////  Air
////////////////////////////////  Water"

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

////////////////////////////////////////////////////////////////////////
// filter()
// 배열에서 제공된 함수의 조건을 만족하는 요소를 필터링해서 배열의 복사본 생성
const arr4 = ['apple', 'melon', 'orange', 'watermelon', 'strawberry'];
const arr5 = arr4.filter((item) => item.length > 6);
console.log(arr4); // ['apple', 'melon', 'orange', 'watermelon', 'strawberry']
console.log(arr5); // ['watermelon', 'strawberry']
