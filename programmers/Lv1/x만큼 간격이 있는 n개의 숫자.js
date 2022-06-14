function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 모범 답안 for문 안쓰려고 해보기 Array(n).fill!
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
