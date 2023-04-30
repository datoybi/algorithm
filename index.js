// 미로 탐색
// https://www.acmicpc.net/problem/2178
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, m, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

console.log(input);
console.log(n);
console.log(m);

input.map((el) => {
  console.log(el);
});
