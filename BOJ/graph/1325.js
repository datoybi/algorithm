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

//!: dfs stack 사용
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map(Number);

function solution(n, m, arr) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    const [child, parent] = arr[i].split(" ");
    graph[+parent].push(+child);
  }

  const dfs = (start) => {
    const stack = [start];
    const visited = new Array(n + 1).fill(0);
    visited[start] = 1;
    let count = 0;
    while (stack.length) {
      const node = stack.pop();
      for (let v of graph[node]) {
        if (visited[v]) continue;
        visited[v] = 1;
        stack.push(v);
        count++;
      }
    }
    return count;
  };

  let maxCount = 0;
  let answer = [];
  for (let i = 1; i <= n; i++) {
    const count = dfs(i);
    if (count > maxCount) {
      answer = [];
      maxCount = count;
    }
    if (count === maxCount) {
      answer.push(i);
    }
  }
  return answer.join(" ");
}

console.log(solution(+n, +m, arr));

// 내 이전 코드인데 대체 왜!!!! 시간초과 나는지 모르겠다..
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map((el) => +el);
const graph = [...new Array(n + 1)].map((el) => []);
const depth = new Array(n + 1).fill(0);

arr.map((el) => {
  const [a, b] = el.split(" ").map((e) => +e);
  graph[b].push(a);
});

const dfs = (node) => {
  let count = 1;
  const stack = [];
  const visited = new Array(n + 1).fill(false);
  stack.push(node);
  visited[node] = true;

  while (stack.length) {
    let v = stack.pop();
    for (let node of graph[v]) {
      if (visited[node]) continue;
      count += 1;
      visited[node] = true;
      stack.push(node);
    }
  }
  // depth[node] = count;
  return count;
};

let maxCount = 0;
let answer = [];

for (let i = 1; i <= n; i++) {
  const count = dfs(i);
  if (count > maxCount) {
    answer = [];
    maxCount = count;
  }
  if (count === maxCount) {
    answer.push(i);
  }
}
console.log(answer.join(" "));
