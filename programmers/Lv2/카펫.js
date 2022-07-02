function solution(brown, yellow) {
  const answer = [];

  for (let i = 1; i < brown; i++) {
    for (let j = i; j < brown; j++) {
      if (i * 2 + (j - 2) * 2 === brown && i * j === brown + yellow) {
        answer.push(j, i);
        break;
      }
    }
  }
  return answer;
}
