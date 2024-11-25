/**
 * @구조분해할당
 * 객체와 배열 모두에 구조분해 할당 가능
 *
 */
const colors1 = ['red', 'blue', 'green'];
const [c1, c2, c3] = colors1;
console.log(c1); // red
console.log(c2); // blue
console.log(c3); // green

const colors2 = { c4: 'orange', c5: 'navy', c6: 'khaki' };
const { c4, c5, c6 } = colors2;
console.log(c4); // orange
console.log(c5); // navy
console.log(c6); // khaki

const { c4: color4, c5: color5, c6: color6 } = colors2;
console.log(color4); // orange
console.log(color5); // navy
console.log(color6); // khaki

/**
 * @변수할당
 * 구조분해할당을 활용하여 임시변수 없이 변수의 값을 교환 가능
 *
 */
let a = 10;
let b = 5;
tmp = a; // 임시변수 tmp
a = b;
b = tmp;
console.log(a, b); // 5 10

let c = 10;
let d = 5;
[c, d] = [d, c];
console.log(c, d); // 5 10
