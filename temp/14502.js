// https://www.acmicpc.net/problem/14502
// 연구소
// - 삼중 for문을 돌려서 벽을 세울 수 있는 모든 경우의 수 추출하기
// - bfs를 통해 2의 상하좌우가 0이면 2가 되게끔 퍼져나가게 하기
// - 0의 개수를 카운트 해서 카운트한 0의 값의 최솟값을 구하기

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map(Number);
const graph = input.map((el) => el.split(" ").map(Number));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = 0;
console.log(graph);
console.log(n, m);
