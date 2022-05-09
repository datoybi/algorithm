/* eslint-disable no-shadow */
// fs

function solution(data) {}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// solution(arr)

// ************************
// readline
// ************************
// readline을 권장한다고 합니다

(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const buffer = [];
  r1.on("line", (line) => {
    buffer.push(line);
  }).on("close", () => {
    main(buffer);
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
