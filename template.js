"use strict";

function solution(data) {}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// solution(arr)

//////////////////readline//////////////////
// readline을 권장한다고 합니다..

// 한줄
// (() => {
//   const readline = require("readline");
//   const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   r1.on("line", function (line) {
//     console.log(line);

//     r1.close();
//   }).on("close", function () {
// 		main(line);
//     process.exit();
//   });
// })();

// const main = (input) => {
// };

// 여러줄
(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const buffer = [];
  r1.on("line", function (line) {
    buffer.push(line);
  }).on("close", function () {
    console.log(buffer);
    // const input = buffer[1].split(" ").map((x) => parseInt(x, 10));
    main(input);
  });
})();

const main = (input) => {
  console.log(input);
  input.toString().trim().split("\n");

  console.log(input);
  input.shift();
  const arr = input.map((el) => el.split(" "));
  console.log(arr);
};
