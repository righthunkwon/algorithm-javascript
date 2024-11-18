// https://www.youtube.com/watch?v=LD-Px5YCd8Y&ab_channel=%EC%9E%84%EC%BB%A4%EB%B0%8B

// n까지 모두 판별하기
// 가장 기초적이지만 비효율적인 방법
// 2부터 n-1까지의 모든 정수를 다 나누어 떨어지는 수가 있는지 확인
const isPrime1 = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// n의 제곱근까지만 판별하기
// n이 소수가 아니라는 건 나누어 떨어진다는 것인데, 나누어 떨어지는 수는 쌍이 존재
// 쌍이 존재할 때, 쌍의 작은 수는 n의 제곱근까지가 최대이므로 제곱근까지만 판별하면 됨
const isPrime2 = (n) => {
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
