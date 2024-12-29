/**
 * @분할정복
 * 문제를 작은 단위로 나누고 각각의 하위 문제를 해결한 후 이를 결합하여 최종적으로 원하는 문제를 해결
 *
 * 1.분할
 * 2.정복
 * 3.결합
 *
 */

/**
 * @일반함수
 * O(n)의 시간복잡도, 30번 연산 수행
 *
 */
function power1(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power1(2, 30)); // 1073741824

/**
 * @분할정복
 * O(log n)의 시간복잡도
 * n이 짝수일 떄와 홀수일 때를 분할하여 계산
 *
 */
function power2(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    const half = power2(base, Math.floor(exponent / 2));
    return half * half;
  } else {
    return base * power2(base, exponent - 1);
  }
}
console.log(power2(2, 30)); // 1073741824
