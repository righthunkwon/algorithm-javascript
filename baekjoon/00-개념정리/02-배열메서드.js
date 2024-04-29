// join()
// 배열의 모든 요소를 지정된 구분 문자열로 구분하여 연결된 새 문자열 반환
const arr1 = ['Fire', 'Air', 'Water'];

console.log(arr1.join()); // "Fire,Air,Water"
console.log(arr1.join('')); // "FireAirWater"
console.log(arr1.join('-')); // "Fire-Air-Water"

// reverse()
// 배열의 순서를 반전
// 원본 배열을 수정함에 유의(destructive)
const arr2 = ['one', 'two', 'three'];

console.log(arr2); // ["one", "two", "three"]
console.log(arr2.reverse()); //  ["three", "two", "one"]
console.log(arr2); // ["three", "two", "one"]
