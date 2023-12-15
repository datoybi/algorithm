/*
	https://www.acmicpc.net/problem/15666
	N과 M(12)	
	시간복잡도 : N^M = 7^7 = 82만 -> 1초안에 가능
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const selected = [];
const result = [];

const recursive = () => {
  if (selected.length === M) {
    result.push(selected.join(" "));
  } else {
    arr.forEach((el, index) => {
      if (selected.every((select) => select <= el)) {
        selected.push(el);
        recursive();
        selected.pop();
      }
    });
  }
};

recursive();
console.log([...new Set(result)].join("\n"));
