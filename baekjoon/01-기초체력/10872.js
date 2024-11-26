const input = Number(require('fs').readFileSync('tc.txt').toString().trim());

/**
 * @방법1 반복문 활용
 *
 *
 *  function factorial(num) {
 *    let result = 1;
 *    if (num === 0 || num === 1) {
 *        return 1;
 *    }
 *    for (let i = 0; i < num; i++) {
 *        result *= num - i;
 *    }
 *    return result;
 *  }
 *
 */

/**
 * @방법2 재귀함수 활용
 *
 */
function factorial(num) {
  // 기저조건(종료조건)
  // 이때 인자로 문자 0이 들어올 경우 기저조건을 만족하지 못해 재귀함수가 너무 많이 메모리에 쌓여 StackSizeExceeded 오류가 발생
  if (num === 0 || num === 1) {
    return 1;
  }
  // 반복호출(재귀)
  return num * factorial(num - 1);
}
console.log(factorial(input));

/**
 * num이 5일 때의 흐름
 * 5 * factorial(4)
 *          4 * factorial(3)
 *                  3 * factorial(2)
 *                          2 * factorial(1)
 *                                   1
 *
 * 우측 대각선 아래로 내려왔다가
 * 다시 좌측 대각선 위로 올라가는 흐름
 *
 */
