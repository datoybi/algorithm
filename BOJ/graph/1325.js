// 효율적인 해킹
// https://www.acmicpc.net/problem/1325
// 모두 탐색하는 것, 방향 그래프이다.
// 시간복잡도?

// 시간초과가 나는 recursive dfs..

// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const first = input.shift();
const [n, m] = first.split(" ").map((el) => +el);

// graph, depth 세팅
const graph = [...new Array(n + 1)].map((el) => []);
const depth = new Array(n + 1).fill(0);
let count = 1;

input.map((el) => {
  const [a, b] = el.split(" ").map((e) => +e);
  graph[b].push(a);
});

// dfs 선언
const dfs = (node, visited) => {
  visited[node] = true;

  graph[node].map((v) => {
    if (!visited[v]) {
      visited[v] = true;
      count += 1;
      dfs(v, visited);
    }
  });
  depth[node] = count;
};

// dfs 호출
for (let i = 1; i <= n; i++) {
  count = 1;
  const visited = new Array(n + 1).fill(false);
  dfs(i, visited);
}
const maxCnt = Math.max(...depth);

// 정답 출력
const result = depth
  .map((el, index) => {
    if (el === maxCnt) return index;
  })
  .filter((item) => item !== undefined);

console.log(result.join(" "));
