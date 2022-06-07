// 넘 쉬운 브론즈급 문제

function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}
