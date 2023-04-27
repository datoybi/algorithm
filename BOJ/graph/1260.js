// DFS와 BFS
// https://www.acmicpc.net/problem/1260
// 시간복잡도?
// O(E) = 10000

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const first = input.shift();
const [n, m, v] = first.split(" ").map((el) => +el);

const graph = [...new Array(n + 1)].map((el) => []);
const dfsVisited = new Array(n + 1).fill(false);
const bfsVisited = new Array(n + 1).fill(false);

// 그래프 생성
input.map((el) => {
  const [start, end] = el.split(" ").map((v) => +v);
  graph[start].push(end);
  graph[end].push(start);
});

// 오름차순 정렬
const sorted = graph.map((el) => el.sort((a, b) => a - b));

// dfs 처리
const dfs = (node) => {
  dfsVisited[node] = true;
  sorted[node].map((v) => {
    if (!dfsVisited[v]) {
      dfsVisited[v] = true;
      dfsArr.push(v);
      dfs(v);
    }
  });
};

// bfs 처리
const bfs = (start) => {
  const queue = [];
  queue.push(start);
  bfsVisited[start] = true;

  while (queue.length !== 0) {
    const v = queue.shift();
    bfsArr.push(v);

    sorted[v].map((node) => {
      if (!bfsVisited[node]) {
        queue.push(node);
        bfsVisited[node] = true;
      }
    });
  }
};

const dfsArr = [v];
const bfsArr = [];

// dfs, bfs 호출
dfs(v);
bfs(v);

// 출력
console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
