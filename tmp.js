const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

(() => {
  const rl = readline.createInterface({ input, output });
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
