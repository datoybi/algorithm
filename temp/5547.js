/**
 * https://www.acmicpc.net/problem/5547
 * 일루미네이션
 *
 * 일단 x좌표 y좌표가 뒤집어져 있고 0부터 시작하는게 아니라 1부터 시작한다. 거기서부터 좀 헷갈린다.
 * 또, 해설을 보니 외부공간, 내부공간으로 나누어야 한다고 하는데.. 골4라 그런지 좀 까다로운 감이 있다ㅜㅜ 담에 다시 풀어봐야곘다
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [w, h] = num.split(" ").map(Number);
const graph = input.map((el) => [0, ...el.split(" ").map(Number)]);
graph.unshift([...new Array(w + 1)].fill(0));

const visited = [...new Array(h + 1)].map((el) =>
  [...new Array(w + 1)].fill(0)
);

const dx = [0, 1, 0, -1, -1, -1];
const dy = [-1, 0, 1, 1, 0, -1];

// console.log(visited);
console.log(graph);

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = 1;
  let count = 0;
  console.log("x,y ", x, y);

  while (queue.length) {
    const coord = queue.shift();
    console.log(coord);
    count += 1;
    for (let i = 0; i < 6; i++) {
      const nx = coord[0] + dx[i];
      const ny = coord[1] + dy[i];
      // console.log("up nx, ny ", ny, nx);
      // console.log("up graph", graph[ny][nx]);
      if (
        nx < 0 ||
        ny < 0 ||
        h + 1 <= ny ||
        w + 1 <= nx ||
        graph[ny][nx] === 0 ||
        visited[nx][ny] > 0
      )
        continue;
      // console.log("nx, ny ", nx, ny);

      queue.push([nx, ny]);
      visited[nx][ny] = graph[coord[0]][coord[1]] + 1;
    }
  }
};

bfs(2, 2);
console.log(visited);

// console.log(graph[1][2]);
