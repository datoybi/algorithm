/*
	https://www.acmicpc.net/problem/2231
	분해합

	시간복잡도 : 2초 -> 약 2억개의 연산 가능
	자연수 N이 될 수 있는 크기? 백만
	백만동안 반복문을 돌리는 것이 가장 큰 최대 연산이므로 제 시간 내에 연산 가능
*/

// 데이터 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(n) {
  // n만큼 돌아서 분해합이 있나 체크
  for (let i = 1; i <= n; i++) {
    const add = i + [...(i + "")].reduce((acc, el) => acc + +el, 0);
    if (add === n) {
      return i; // 분해합이 있다면 return
    }
  }
  return 0; // 없다면 0을 리턴
}

const n = Number(input[0]);
const answer = solution(n); // 실행
console.log(answer); // 출력
