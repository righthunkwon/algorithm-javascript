/**
 * @재귀함수
 * 함수가 자기 자신을 다시 호출하는 구조로 만들어진 함수
 * 기저조건(종료조건)을 설정해주지 않을 경우 무한 반복 발생
 * 재귀함수로 작성된 코드는 반복문으로도 구현 가능
 *
 * 1. 기저조건(종료조건)
 * 2. 반복수행(재귀함수)
 *
 */

/**
 * @예제1
 * num 이하의 합을 구하는 함수
 *
 */
const sum = (num) => {
  // 1.기저조건(종료조건)
  if (num <= 1) {
    return num;
  }

  // 2.반복수행(재귀함수)
  return num + sum(num - 1);
};
console.log(sum(100)); // 5050

/**
 * @예제2
 * 피보나치순열
 * 1, 1, 2, 3, 5, 8, 13 ...
 *
 */

const fibonacci = (num) => {
  if (num < 1) return;
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(7)); // 13
