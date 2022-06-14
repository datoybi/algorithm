function solution(arr) {
  return arr.reduce((acc, el) => el + acc) / arr.length;
}
