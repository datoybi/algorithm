// 봄버맨
// https://www.acmicpc.net/problem/16918
// 반례 : https://www.acmicpc.net/board/view/34611
// 지저분하지만.. 혼자힘으로 해냈다! 뿌듯

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [r, c, n] = num.split(" ").map((el) => +el);
// 그래프, 새로 덮어씌울 그래프 선언
let graph = input.map((e) => [...e]);
let newGraph = graph.map((el) => [...el]);
// 동서남북 좌표
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const bfs = (x, y, visited) => {
  const queue = [];
  queue.push([x, y]);

  while (queue.length !== 0) {
    const coord = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = coord[0] + dx[i];
      let ny = coord[1] + dy[i];

      if (0 <= nx && 0 <= ny && nx < r && ny < c && graph[nx][ny] === ".") {
        visited[nx][ny] = visited[coord[0]][coord[1]] + 1;
        newGraph[nx][ny] = ".";
      }
    }
  }
};

let answer = [];

// 1초뒤 아무일도 벌어지지 않음
if (n == 1) {
  answer = graph;
} else if (n % 2 === 0) {
  // 2로 나누어지면 O채우기
  answer = [...new Array(r)].map((el) => [...new Array(c).fill("O")]);
  // 홀수번째이면 폭탄 터트리기
} else {
  cnt = 1;
  while (cnt < n) {
    newGraph = graph.map((el) => [...el]);
    const visited = [...new Array(r)].map((el) => [...new Array(c).fill(0)]);

    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (visited[i][j]) continue;
        if (graph[i][j] === ".") {
          newGraph[i][j] = "O";
        } else {
          newGraph[i][j] = ".";
          bfs(i, j, visited);
        }
      }
    }
    // 새로운 그래프로 교체
    graph = newGraph.map((el) => [...el]);
    answer = graph.map((el) => [...el]);
    cnt += 2;
  }
}

// 출력
answer.forEach((el) => console.log(el.join("")));
