// 숫자고르기
// https://www.acmicpc.net/problem/2668
// 일단 이걸 어떻게 그래프 탐색으로 접근하는지를 잘 모르겠어서 먼저 접근법을 봤다.(https://cotak.tistory.com/141)

// 단순히 한 사이클만 도는 것이 문제의 조건이라고 생각했다.
// 1->3, 3->1
//  결론적으로는 그렇게 하면 안되었고 1->2->3, 3->2->1로 연결된 큰 사이클도 고려를 했어야만 했다.

// 입력 받기
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const visited = [...new Array(+n + 1)].fill(false); // 방문한 노드 체크

// 그래프 생성
const graph = [...new Array(+n + 1)].map(() => []);
input.map((el, i) => {
  graph[+el].push(i + 1);
});

// 정답
const answer = new Set();

const dfs = (n, cycle) => {
  visited[n] = true;
  const stack = [];
  stack.push(n);
  cycle.push(n); // 거쳐간 노드를 cycle에 넣어두어 사이클이 도는지를 체크

  while (stack.length) {
    let v = stack.pop();

    for (let node of graph[v]) {
      if (!cycle.includes(node)) {
        stack.push(node);
      } else {
        answer.add(...cycle); // cycle안에 node가 이미 있으면
      }
    }
  }
};

for (let i = 1; i < +n + 1; i++) {
  if (!visited[i]) dfs(i, []);
}

// 출력
console.log(answer.size);
answer.forEach((el) => console.log(el));
