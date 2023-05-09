const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [w, h] = num.split(" ").map(Number);
console.log(input);
console.log(w);
console.log(h);

const graph = input.map((el) => el.split(" ").map(Number));
console.log(graph);
