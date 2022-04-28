/* 
파일을 확장자 별로 정리해서 몇개씩 있느지 알려주기
보기 편하게 확장자들을 사전 순으로 정렬하기
왜 내가 짠거는 안될까 ㅠㅠ답답하다 에혀혛
*/

// "use strict";

// function solution(arr) {
// 	console.log(arr)
//   let curVal = arr[0],
//     curCnt = 0,
//     printVal = "";

//   arr.forEach((el, idx) => {
//     if (el === curVal) {
//       curCnt += 1;
//     } else {
//       printVal += `${curVal} ${curCnt}\n`;
//       curCnt = 1;
//       curVal = el;
//     }
//     if (idx === arr.length - 1) {
//       printVal += `${curVal} ${curCnt}`;
//     }
//   });
//   return printVal;
// }

// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\r\n");

// input.shift();
// const arr = input.map((el) => el.split(".")[1]).sort();

// console.log(solution(arr));

// 남이 짠 코드
function solution(arr) {
  let ans = arr.reduce((acc, el) => {
    if (!acc[el]) acc[el] = 1;
    else acc[el] += 1;
    return acc;
  }, {});

  Object.keys(ans)
    .sort()
    .forEach((el) => {
      console.log(`${el} ${ans[el]}`);
    });
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();
const arr = input.map((el) => el.split(".")[1]).sort();

solution(arr);
