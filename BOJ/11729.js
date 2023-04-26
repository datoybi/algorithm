/*
	하노이 탑 이동 순서
	하노이의 탑 플레이 : https://vidkidz.tistory.com/649
	https://www.acmicpc.net/problem/11729
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input);
let answer = [];

// 하노이 로직
const hanoi = (N, start, mid, end) => {
  if (N === 1) {
    answer.push([start, end]);
    return;
  }

  hanoi(N - 1, start, end, mid); // 1. n-1개의 원반을 1번에서 2번으로 옮기고,
  answer.push([start, end]); // 2. 남아있는 n번째 원반을 1번에서 3번으로 옮긴다.
  hanoi(N - 1, mid, start, end); // 3. 마지막으로 2번으로 옮겼던 n-1개의 원반을 3번으로 옮긴다.
};

hanoi(N, 1, 2, 3);

// 출력
// console.log(answer);
console.log(answer.length);
console.log(answer.map((element) => element.join(" ")).join("\n"));

// for, forEach가 시간초과가 난다! map을 쓰자

// for (let i = 0; i < answer.length; i++) {
//   console.log(answer[i].join(" "));
// }

// answer.forEach(([a, b]) => {
//   console.log(a, b);
// });
