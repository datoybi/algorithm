// 이걸 어떻게 dfs,bfs로 접근하는지 모르겠다ㅠㅠ 그래프 뿐만 아니라 어캐 접근해야할지...

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
  queue.push([n, 0]);
  visit[n] = 1;

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === k) return count;
    for (i of [current - 1, current + 1, current * 2]) {
      if (!visit[i] && 0 <= i && i <= 100000) {
        visit[i] = 1;
        queue.push([i, count + 1]);
      }
    }
  }
};

const answer = bfs(n);
console.log(answer);
