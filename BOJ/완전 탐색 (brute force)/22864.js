/**
 * https://www.acmicpc.net/problem/22864
 * 피로도
 * 조건 따라 풀면 쉬웠던 문제
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [a, b, c, m] = input[0].split(" ").map(Number);
let hour = 0;
let tired = 0;
let work = 0;

while (hour < 24) {
  if (tired + a > m) {
    // 일을 하지 못한다면
    tired -= c;
    if (tired < 0) tired = 0;
  } else {
    // 일을 할 수 있다면
    work += b;
    tired += a;
  }
  hour += 1;
}

console.log(work);
