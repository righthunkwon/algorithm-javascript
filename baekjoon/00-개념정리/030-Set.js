// Set
// 집합, 중복불가

/**
 * A.difference(B)
 * -> return Set
 * -> A와 B의 차집합, 순수한 A
 *
 */
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

/**
 * A.intersection(B)
 * -> return Set
 * -> A와 B의 교집합
 *
 */
function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

/**
 * A.symmetricDifference(B)
 * -> return Set
 * -> A와 B의 대칭차집합 (A와 B의 합집합 중 교집합을 제외한 부분)
 *
 */
function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

/**
 * A.union(B)
 * -> return Set
 * -> A와 B의 합집합
 *
 */
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}
