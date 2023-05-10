// https://www.acmicpc.net/problem/18312
// 시각
// 15퍼센트 정도부터 틀렸습니다가 뜨는데 왜 그러는지 도무지 모르겠다..
// 완탐은 내가 계산을 이렇게 이렇게 하면 되겠지? 해서 로직을 세우면 다른 예외가 생기고
// 그냥 말 그대로 무식하게 반복문 돌려서 결과값 도출하면 답 나오는 것 같다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ");
let count = 0;

for (let h = 0; h <= n; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      const time =
        (h < 10 ? "0" + h : "" + h) +
        (m < 10 ? "0" + m : "" + m) +
        (s < 10 ? "0" + s : "" + s);
      if (time.includes(k)) count += 1;
    }
  }
}
console.log(count);

// 실패한 코드
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, k] = input[0].split(" ");
// const seconds = Number(n) * 60 * 60 + 60 * 59 + 59;
// let count = 0;

// for (let i = 0; i <= seconds; i++) {
//   let result = [];
//   let rest = i;

//   if (rest >= 3600) {
//     let h = Math.floor(rest / 3600);
//     h = h < 10 ? "0" + h : "" + h;
//     result.push(...h);
//     rest = rest - 3600 * h;
//   }
//   if (rest >= 60) {
//     let m = Math.floor(rest / 60);
//     m = m < 10 ? "0" + m : "" + m;
//     result.push(...m);
//     rest = rest - 60 * m;
//   }

//   rest = rest < 10 ? "0" + rest : "" + rest;
//   result.push(...(rest + ""));

//   if (result.includes(k)) count += 1;
//   // console.log(result);
// }

// console.log(count);
