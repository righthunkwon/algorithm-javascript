/**
 * 1. for           : 반복(초기화식;조건식;증감식 / {실행문})
 * 2. while         : 반복({실행문} 내 종료조건 명시 필요, 미비 시 무한루프 위험)
 * 3. do...while    : 일단 한 번 실행 후 반복({실행문})
 *
 */
for (let i = 1; i < 6; i++) {
  console.log(i); // 1 2 3 4 5
}

let j = 1;
while (j < 6) {
  console.log(j); // 1 2 3 4 5
  j++;
}

let k = 5;
do {
  console.log(k); // 5
} while (k < 1);

/**
 * 1. Object.keys()
 * 2. Object.values()
 * 3. Object.entries()
 *
 */
let person = {
  name: '프론트',
  age: 25,
  height: 175,
};

console.log(Object.keys(person)); // [ 'name', 'age', 'height' ]
console.log(Object.values(person)); // [ '프론트', 25, 175 ]
console.log(Object.entries(person)); // [ [ 'name', '프론트' ], [ 'age', 25 ], [ 'height', 175 ] ]

let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  let currKey = keys[i];
  console.log(`key: ${currKey}, value: ${person[currKey]}`);
}

/**
 * 1. for...of (배열)
 * 2. for...in (객체)
 *
 */

let arr = [1, 2, 3, 4, 5];
for (let item of arr) {
  console.log(item); // 1 2 3 4 5
}

// let person = {
//   name: '프론트',
//   age: 25,
//   height: 175,
// };
for (let key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}

/**
 * 1. forEach()
 *
 */

// let arr = [1, 2, 3, 4, 5];
arr.forEach((item) => {
  console.log(item); // 1 2 3 4 5
});
