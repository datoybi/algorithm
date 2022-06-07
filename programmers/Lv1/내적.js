function solution(a, b) {
  let answer = 0;
  a.forEach((el, i) => (answer += el * b[i]));
  return answer;
}
