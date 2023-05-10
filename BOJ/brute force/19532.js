/**
 * https://www.acmicpc.net/problem/19532
 * 수학은 비대면강의입니다
 * 시간복잡도? 1초 => 약 1억개의 연산 가능
 * -999~999사이의 수의 개수? 1999
 * 1999 * 1999 = 약 3백만 -> 1초안에 연산 가능
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

// 이 방식대로 하면 0일때 문제가 생긴다
// const y = (c * d - a * f) / (b * d - e * a);
// const x = (c - b * y) / a;

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
      return;
    }
  }
}
