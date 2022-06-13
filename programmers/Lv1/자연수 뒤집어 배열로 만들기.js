function solution(n) {
  return [...(n + "")].reverse().map((el) => parseInt(el, 10));
}
