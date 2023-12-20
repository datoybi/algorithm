/*
	달팽이
	https://www.acmicpc.net/problem/1913
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const num = +input[1];
const graph = Array.from(Array(N), () => Array(N).fill(0));

console.log(N);
console.log(num);
// console.log(graph);
let count = 1;
count += 1;

for (let i = 3; i <= N; i += 2) {
  const start = ~~(i / 2);
  console.log("start ", start);
  graph[start][start] = count;

  // up
  for (let j = 1; j <= i / 3; j++) {
    // console.log("i : ", i, "j : ", j);
    graph[(start, start - j)] = count; // 3,2
    count += 1;
  }

  // right
  for (let j = 1; j <= i / 3 + 1; j++) {
    graph[(start + 1, start - j)] = count; // 4,2
    count += 1;
  }
  // down
  graph[(start + 1, start)] = count; // 4,3
  count += 1;

  graph[(start + 1, start + 1)] = count; // 4,4
  count += 1;

  // left
  graph[(start, start + 1)] = count; // 3,4
  count += 1;

  graph[(start - 1, start + 1)] = count; // 2,4
  count += 1;

  // up
  graph[(start - 1, start)] = count; // 2,3
  count += 1;

  graph[(start - 1, start + 1)] = count; // 2,4
  count += 1;
}

console.log(graph);
