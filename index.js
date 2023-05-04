const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const visit = new Array(10001).fill(0);

const bfs = (n) => {
  const queue = [];
  const count = 0;
  queue.push([n, count]);

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === k) return count;

    for (let i of [current - 1, current + 1, current * 2]) {
      if (visit[i] || i <= 0 || 100000 < i) continue;
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
