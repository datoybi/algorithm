const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const size = +input.shift();

const board = Array.from(new Array(1 + 4 * (size - 1)), () =>
  new Array(1 + 4 * (size - 1)).fill(" "),
);

console.log(board);
console.log(board.length); // 9

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
