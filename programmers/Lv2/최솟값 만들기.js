function solution(A, B) {
  const arrA = A.sort((a, b) => a - b);
  const arrB = B.sort((a, b) => b - a);
  return arrA.reduce((acc, el, i) => acc + el * arrB[i], 0);
}
