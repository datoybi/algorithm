function solution(arr) {
  let min = [...arr].sort((a, b) => a - b).shift();
  arr.splice(arr.indexOf(min), 1);
  return arr.length === 0 ? [-1] : arr;
}
