const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m, t] = num.split(" ").map(Number);
const graph = input.map((el) => el.split(" ").map(Number));
const visited = [...new Array(n)].map((el) => new Array(m).fill(0));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let gx = 0;
let gy = 0;

const bfs = (x, y, flag) => {
  const queue = [[x, y]];

  while (queue.length) {
    const coords = queue.shift();

    // 칼을 안 건들고 목표지점까지의 최단거리
    for (let i = 0; i < 4; i++) {
      const nx = coords[0] + dx[i];
      const ny = coords[1] + dy[i];

      if (
        nx < 0 ||
        ny < 0 ||
        n <= nx ||
        m <= ny ||
        visited[nx][ny] ||
        graph[nx][ny] === 1
      )
        continue;
      // flag가 0이면 1 카운트 x
      if (flag === 0 && graph[nx][ny] === 1) {
        continue;
      }

      visited[nx][ny] = visited[coords[0]][coords[1]] + 1;
      queue.push([nx, ny]);

      if (graph[nx][ny] === 2) {
        gx = nx;
        gy = ny;
      }
    }
  }
};

bfs(0, 0, 0);

const visited2 = [...new Array(n)].map((el) => new Array(m).fill(0));

// 칼까지 도달하는 최단거리
const bfs2 = (x, y) => {
  const queue = [[x, y]];
  while (queue.length) {
    const coords = queue.shift();

    // 칼을 안 건들고 목표지점까지의 최단거리
    for (let i = 0; i < 4; i++) {
      const nx = coords[0] + dx[i];
      const ny = coords[1] + dy[i];

      if (nx < 0 || ny < 0 || n <= nx || m <= ny || visited2[nx][ny]) continue;
      visited2[nx][ny] = visited2[coords[0]][coords[1]] + 1;
      queue.push([nx, ny]);

      if (graph[nx][ny] === 2) {
        gx = nx;
        gy = ny;
      }
    }
  }
};

bfs2(gx, gy);

const answer = Math.min(
  visited2[n - 1][m - 1] + visited[gx][gy],
  visited[n - 1][m - 1]
);

console.log(answer === 0 ? "Fail" : answer);
