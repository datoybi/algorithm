/*
ABCDE 
https://www.acmicpc.net/problem/13023

5 4
0 1
0 2
2 3
3 4
    
Output: 0
Answer: 1

반례
https://www.acmicpc.net/board/view/98422

일단 신경써야할 부분은 방문하고 실패했던 곳을 다시 방문체크를 없애주어야 한다는 점이었다. 
그 이유는 방문처리가 되어있으면 그 곳을 방문하지 않기 때문에 올바르지 못한 답이 나온다. 
*/

// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

// 입력받은 데이터 n, m, graph, visit 생성
const [n, m] = num.split(" ").map(Number);
const graph = [...new Array(n)].map((el) => []);
const visited = [...new Array(n)].fill(false);

input.map((element) => {
  const [a, b] = element.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

let flag = false; // 4를 초과했는지 여부

const dfs = (depth, node) => {
  visited[node] = true;
  if (flag) return; // 이 구문을 넣으니 시간초과에서 해결되었다
  if (depth === 4) {
    flag = true;
  }

  graph[node].map((v) => {
    if (!visited[v]) {
      visited[v] = true;
      dfs(depth + 1, v);
      visited[v] = false; // 방문처리를 없애주기
    }
  });
};

// 어디서 시작하는지에 따라 답이 달라서 각각의 노드를 순회
for (let i = 0; i < n; i++) {
  visited[i] = true;
  dfs(0, i);
  visited[i] = false; // 방문처리를 없애주기

  if (flag) {
    console.log(1);
    return;
  }
}
console.log(0);
// console.log(flag ? "1" : "0");
