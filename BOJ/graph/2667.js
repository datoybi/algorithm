// 단지번호붙이기
// https://www.acmicpc.net/problem/2667

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

// graph 생성
const graph = input.map((el) => [...el]);
const visited = [...new Array(+n)].map((el) => [...new Array(+n).fill(0)]);
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let count = 1;

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = count;

  while (queue.length) {
    const coords = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = coords[0] + dx[i];
      const ny = coords[1] + dy[i];
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        !visited[nx][ny] &&
        graph[nx][ny] === "1"
      ) {
        visited[nx][ny] = count;

        queue.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] || graph[i][j] === "0") continue;
    bfs(i, j, count);
    count += 1;
  }
}

// 출력
console.log(count - 1);
const result = [];
for (let cnt = 1; cnt < count; cnt++) {
  result.push(
    visited.reduce((acc, el) => {
      return acc + el.filter((e) => e === cnt).length;
    }, 0)
  );
}

// 오름차순 정렬
const sorted = result.sort((a, b) => a - b);
console.log(sorted.join("\n"));
