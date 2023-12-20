/*
	https://www.acmicpc.net/problem/5597
	손쉽게 풀음
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const arr = Array(30)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((el) => !input.includes(el));

console.log(`${arr[0]}\n${arr[1]}`);
