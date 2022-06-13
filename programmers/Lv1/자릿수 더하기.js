function solution(n) {
  const str = n + "";
  return [...str].reduce((acc, el) => parseInt(el, 10) + acc, 0);
}
