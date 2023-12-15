/*
	https://www.acmicpc.net/problem/15654
	N과 M(5)	
	시간복잡도 : N^M = 8^8 = 16만 -> 1초 안에 가능
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const selected = [];
let result = "";

const recursive = () => {
  if (selected.length === M) {
    result += selected.join(" ");
    result += "\n";
  } else {
    arr.forEach((el) => {
      if (!selected.includes(el)) {
        selected.push(el);
        recursive();
        selected.pop();
      }
    });
  }
};

recursive();
console.log(result);
