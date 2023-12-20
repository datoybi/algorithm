/*
	https://www.acmicpc.net/problem/10994
	별 찍기 - 19 
	아니 디버깅 해봐도.. 왜 이렇게 되는건지 솔직히 모르겠다. 어떻게 해서 이런 포문에 구조가 되는건지
	그리고 이게 길쭉하니까 좌표평면에서 그려 보는게 훨씬 로직을 생각하는 데 도음이 될 것 같다
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const size = +input.shift();
const board = Array.from(new Array(1 + 4 * (size - 1)), () => new Array(1 + 4 * (size - 1)).fill(" "));

const fill = (start, length) => {
  if (length === 1) {
    board[start][start] = "*";
    return;
  }

  for (let i = 0; i < length; i += 1) {
    board[start][start + i] = "*";
    board[start + i][start] = "*";
    board[start + length - 1][start + i] = "*";
    board[start + i][start + length - 1] = "*";
  }

  fill(start + 2, length - 4);
};

fill(0, board.length);

console.log(board.map((row) => row.join("")).join("\n"));
