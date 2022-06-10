function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let divisor = getDivisor(i);
    answer += divisor % 2 === 0 ? i : -i;
  }
  return answer;
}

function getDivisor(num) {
  let cnt = 0;
  for (let i = num; i >= 1; i--) {
    if (num % i === 0) cnt += 1;
  }
  return cnt;
}
