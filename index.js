/*
	https://www.acmicpc.net/problem/15787
	기차가 어둠을 헤치고 은하수를
	구현문제
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(input);
