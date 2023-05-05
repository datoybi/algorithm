// https://www.acmicpc.net/problem/13549
// 숨바꼭질 3

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const visit = new Array(100100).fill(0);

const bfs = (n) => {
  const queue = [];
  queue.push([n, 0]);
  visit[n] = 1;

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === k) return count;

    for (let i of [current * 2, current - 1, current + 1]) {
      if (visit[i] || i < 0 || 100000 < i) continue;
      visit[i] = 1;
      if (current * 2 === i) {
        queue.push([i, count]);
      } else {
        queue.push([i, count + 1]);
      }
    }
  }
};

const answer = bfs(n);
console.log(answer);
