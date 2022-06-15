function solution(s) {
  const arr = s.split(" ").map((el) => parseInt(el, 10));
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
