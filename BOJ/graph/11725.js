// 트리의 부모 찾기
// https://www.acmicpc.net/problem/11725
// 트리 -> 그래프로 어떻게 바꿔야 할지 몰라서 찾아봤다
// 그리고 문제를 좀 잘!!! 읽기
// 출력해야할 것은 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력하는 것
// 모두 순회하면서 상위에서 호출한 노드를 저장해야함.
// 시간복잡도? O(N) (왜인지는 잘모르겠다)

// !: dfs
// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const n = Number(input.shift());
const graph = [...new Array(n + 1)].map((el) => []);
const visited = new Array(n + 1).fill(false);
const answer = new Array(n + 1).fill(0);

// graph setting
input.map((el) => {
  const [start, end] = el.split(" ").map((el) => +el);
  graph[start].push(end);
  graph[end].push(start);
});

// dfs 함수 정의
const dfs = (node) => {
  graph[node].map((v) => {
    if (!visited[v]) {
      answer[v] = node;
      visited[v] = true;
      dfs(v);
    }
  });
};

// 함수 호출
visited[1] = true;
dfs(1);

// 출력
const print = answer.filter((el, i) => i > 1);
console.log(print.join("\n"));

// !:bfs
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const n = Number(input.shift());
const graph = [...new Array(n + 1)].map((el) => []);
const visited = new Array(n + 1).fill(false);
const answer = new Array(n + 1).fill(0);

input.map((el) => {
  const [start, end] = el.split(" ").map((el) => +el);
  graph[start].push(end);
  graph[end].push(start);
});

const bfs = (node) => {
  const queue = [];
  queue.push(node);
  visited[node] = true;

  while (queue.length !== 0) {
    const v = queue.shift();

    graph[v].map((el) => {
      if (!visited[el]) {
        answer[el] = v;
        queue.push(el);
        visited[el] = true;
      }
    });
  }
};

bfs(1);
const print = answer.filter((el, i) => i > 1);
console.log(print.join("\n"));
