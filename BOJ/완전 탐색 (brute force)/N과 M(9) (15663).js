/*
	https://www.acmicpc.net/problem/15663
	N과 M (9)
	중복없이 순서있게(오름차순으로) 나열하기
	1 <= N, M <= 8 이니까 
	시간복잡도 : 8^8은 넘지 않을 것 같아서 1초만에 가능

	메모리 초과 발생 -> 10000보다 작은 수 	
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").sort((a, b) => a - b);

const selected = [];
const result = [];
const visited = new Array(N).fill(false);

const recursive = () => {
  if (selected.length === M) {
    result.push(selected.join(" "));
    return;
  } else {
    visited.forEach((bool, idx) => {
      if (!bool) {
        visited[idx] = true;
        selected.push(arr[idx]);
        recursive();
        visited[idx] = false;
        selected.pop();
      }
    });
  }
};

recursive();
console.log([...new Set(result)].join("\n"));

// 두번쨰 풀이
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
      if (!visited[index]) {
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
