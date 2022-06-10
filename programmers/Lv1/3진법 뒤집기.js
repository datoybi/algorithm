function solution(n) {
  let arr = [...n.toString(3)].reverse();
  return parseInt(arr.join(""), 3);
}
