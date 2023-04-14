/* eslint-disable no-shadow */
// fs

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// ************************
// readline
// ************************
// readline을 권장한다고 합니다

const { stdin: input, stdout: output } = require("process");

(() => {
  const rl = require("readline").createInterface({ input, output });
  const buffer = [];
  rl.on("line", (line) => {
    buffer.push(line);
  }).on("close", () => {
    main(buffer);
  });
})();

const main = (input) => {
  console.log(input);
};
