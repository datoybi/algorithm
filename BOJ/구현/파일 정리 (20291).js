/*
	https://www.acmicpc.net/problem/20291
	파일 정리

	간단했던 문제인데 2차원 배열 정렬에서 조금 찾아봐야 했던 문제이다.
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const num = input.shift();
const json = input
  .map((el) => el.split(".")[1])
  .reduce((acc, e) => {
    acc[e] = (acc[e] || 0) + 1;
    return acc;
  }, {});

const arr = Object.entries(json);

const sorted = arr.sort((prev, cur) => {
  if (prev[0] > cur[0]) return 1;
  if (prev[0] < cur[0]) return -1;
});

console.log(sorted.map((el) => el.join(" ")).join("\n"));
