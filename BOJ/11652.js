/* eslint-disable prefer-const */
/*
	가장 많이 가지고 있는 정수 출력, 여러가지면 작은 수 출력
	될 수 있는 수가 엄청 크다 -> long long
	가장 쉬운 방법(N^2)
		첫번째 숫자를 선택한 후 전체에서 몇번인지 확인하는 방법 (시간초과)
	
	같은 정보들은 인접해 있을 것이다.
	같은 숫자를 빨리 보는 방법 
	정렬 -> O(N log N)
	하나씩 순회 -> O(N)
		시간복잡도 O(N log N)
		공간복잡도 O(N)
	
*/

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

// eslint-disable-next-line no-restricted-syntax 
for (let card in count) {
  if (max < count[card]) {
    max = count[card];
    answer = card;
  } else if (max === count[card] && BigInt(answer) > BigInt(card)) {
    answer = card;
  }
}
console.log(answer);
