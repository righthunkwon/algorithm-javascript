/**
 * @spread
 * 전개연산자(spread operator)
 * - 배열 혹은 객체의 요소를 나열([]와 {}를 제거하는 느낌)
 * - 배열 혹은 객체를 복사하거나 병합할 때 사용
 * - 함수 호출 시 인자(Argument)를 펼칠 때 사용
 *
 */

/**
 * @참고
 * 매개변수 == Parameter == 함수 정의 시 사용
 * 전달인자 == Argument == 함수 호출 시 사용
 *
 */

// 예제1 (spread: 객체속성 펼치기)
const toy = {
  type: 'bear',
  price: 15000,
};
const blueToy = {
  ...toy, // spread
  color: 'blue',
};
const yellowToy = {
  ...toy, // spread
  color: 'yellow',
};

console.log(toy); // { type: 'bear', price: 15000 }
console.log(blueToy); // { type: 'bear', price: 15000, color: 'blue' }
console.log(yellowToy); // { type: 'bear', price: 15000, color: 'yellow' }

// 예제2 (spread: 배열 펼치기)
const color1 = ['red', 'orange', 'yellow'];
const color2 = ['blue', 'navy', 'purple'];
const rainbow = [...color1, 'green', ...color2]; // spread
console.log(rainbow);

// 예제3 (spread: 함수 호출 시 사용)
const arr = [3, 5, 2];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 5

// 참고1 (spread는 깊은 복사를 하는 Object.assign()과 달리 얕은 복사가 된다.)
function User(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new User('권정훈', 28);
const person2 = { ...person1 };

console.log(person1.__proto__); // constructor : User(name, age)
console.log(person2.__proto__); // constructor : Object()

console.log(person1 instanceof User); // true
console.log(person2 instanceof User); // false

// 참고2 (spread 사용 시, 동일한 키값이 복사된 경우 마지막 객체를 기준으로 덮어쓰기 된다.)
const obj1 = {
  name: '이름1',
  age: '나이1',
};
const obj2 = {
  name: '이름2',
  age: '나이2',
};
const newObj = {
  ...obj1,
  ...obj2,
};
console.log(newObj); // { name: '이름2', age: '나이2' }

/**
 * @rest
 * 나머지 매개변수(rest parameter)
 * rest는 함수 정의 시 매개변수로 남는 인자를 배열로 수집하기 위해 사용된다.
 * rest의 경우 함수 매개변수의 가장 마지막에 작성되어야 한다(정의: rest / 호출: spread).
 *
 */

// 예제1 (rest)
function sumAll(...rest) {
  let sum = 0;
  for (let elm of rest) sum += elm;
  return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

// 예제2 (rest는 {}나 []를 뗴버린다고 생각하면 알기 쉽다.)
function printAll(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [ 3, 4, 5 ]
  console.log(...rest); // 3 4 5
}
printAll(1, 2, 3, 4, 5);
