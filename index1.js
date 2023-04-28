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
    console.log(count);
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
