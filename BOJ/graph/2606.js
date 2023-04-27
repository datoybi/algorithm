// 바이러스
// https://www.acmicpc.net/problem/2606
// 1번 정점과 연결된 모든 정점 찾기
// 시간복잡도?
// O(E) = N(N-1)/2 = 100 * (100-1)/2 = 4950

// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
// 로컬에서 test 할때는 \r\n으로 해야합니다

const n = Number(input.shift()); // 컴퓨터 개수
const m = Number(input.shift()); // 연결된 쌍의 개수

const graph = [...new Array(n + 1)].map(() => []); // node가 7이면 8개의 배열을 만들어야 한다.
// 그 이유는 인덱스 0은 사용하지 않고 배열 인덱스 1부터 사용해야하기 때문이다.
const visited = new Array(n + 1).fill(false);
let answer = 0;

// graph 생성
input.map((element) => {
  const [start, end] = element.split(" ").map((el) => +el);
  graph[start].push(end);
  graph[end].push(start);
});

// dfs 실행
const dfs = (node) => {
  visited[node] = true;
  graph[node].map((v) => {
    if (!visited[v]) {
      answer += 1;
      visited[v] = true;
      dfs(v);
    }
  });
};

dfs(1);
console.log(answer);
