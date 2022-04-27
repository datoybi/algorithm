// 시간복잡도 n^2으로 풀어보기
// const fs = require("fs");
// // var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = fs.readFileSync("input.txt").toString().split("\n");
// const a = input[1].split(" ");

// function solution(data) {
//   let p = "";
//   const b = [...a];
//   b.sort((a, b) => a - b);

//   a.some((aEl) => {
//     b.some((bEl, bIdx) => {
//       if (aEl === bEl) {
//         p += `${bIdx} `;
//         b[bIdx] = 1001;
//         return true;
//       }
//     });
//   });
//   return p;
// }

// console.log(solution(a));

// 시간복잡도 NlonN으로 풀어보기

const fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = fs.readFileSync("input.txt").toString().split("\n");
const a = input[1].split(" ");

function solution(data) {
  let p = "";
  const b = [...a];
  b.sort((a, b) => a - b);

  a.forEach((el, i) => {
    idx = b.indexOf(a[i]);
    p += `${idx} `;
    b[idx] = -1;
  });
  return p;
}

console.log(solution(a));
