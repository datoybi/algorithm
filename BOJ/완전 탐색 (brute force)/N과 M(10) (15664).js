/*
	https://www.acmicpc.net/problem/15664
	N과 M(10)	
	시간복잡도 : N^M = 8^8 = 1677만 -> 1초안에 가능
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
const visited = Array(N).fill(false);

const recursive = () => {
  if (selected.length === M) {
    result.push(selected.join(" "));
  } else {
    arr.forEach((el, index) => {
      if (!visited[index] && selected.every((select) => select <= el)) {
        visited[index] = true;
        selected.push(el);
        recursive();
        selected.pop();
        visited[index] = false;
      }
    });
  }
};

recursive();
console.log([...new Set(result)].join("\n"));
