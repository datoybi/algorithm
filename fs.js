// BOJ
// fs
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// readline 권장
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    solution(line);
  })
  .on("close", () => {
    process.exit();
  });

const solution = (input) => {
  console.log(input);
};
