function solution(a, b) {
  [a, b] = [a, b].sort((x, y) => x - y);
  let answer = 0;

  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}
