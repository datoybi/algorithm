// // 맞은것 같은데 자꾸 틀렸다니까.. .반례 못찾겠다

// const fs = require("fs");
// const [N, ...arr] = fs
//   // .readFileSync("/dev/stdin")
// 	.readFileSync("input.txt") || .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\r\n");
// arr.sort((a, b) => a - b);

// console.log(N)
// console.log(arr)

// function solution(arr) {
//   let mode = arr[0],
//     modeCnt = 1,
//     curCnt = 1;
//   for (let i = 1; i < N; i++) {
//     if (arr[i] === arr[i - 1]) {
//       curCnt += 1;
//     } else {
//       curCnt = 1;
//     }
//     if (modeCnt < curCnt) {
//       modeCnt = curCnt;
//       mode = arr[i];
//     }
// 		 console.log(curCnt)
// 		console.log(modeCnt)
// 		  console.log(mode)
//   }
//   return mode;
// }

// console.log(solution(arr));

// 다음에 다시 풀어보기
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [n, ...input] = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = input.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let max = 0;
let answer = 0n;

for (let card in count) {
  if (max < count[card]) {
    max = count[card];
    answer = card;
  } else if (max === count[card] && BigInt(answer) > BigInt(card)) {
    answer = card;
  }
}
console.log(answer);
