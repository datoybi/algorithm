function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  d.forEach((n) => {
    if (budget - n >= 0) {
      budget -= n;
      answer += 1;
    }
  });
  return answer;
}
