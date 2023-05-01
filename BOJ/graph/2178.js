// 미로 탐색
// https://www.acmicpc.net/problem/2178
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map((el) => +el);
const graph = input.map((el) => [...el]);
const visited = [...new Array(n)].map((el) => [...new Array(m).fill(0)]);
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = 1;

  while (queue.length !== 0) {
    const coord = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = coord[0] + dx[i];
      let ny = coord[1] + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !visited[nx][ny] &&
        graph[nx][ny] === "1"
      ) {
        visited[nx][ny] = visited[coord[0]][coord[1]] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return visited[n - 1][m - 1];
};

console.log(bfs(0, 0));
