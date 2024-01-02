/*
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("");
console.log(arr);
let result = [];
const quack = ["q", "u", "a", "c", "k"];

for (i = 0; i < arr.length; i++) {
  const index = quack.findIndex((e) => e === arr[i]);
  console.log(index);

  if (index === 0) {
    result = [...result, ["p"]];
  } else {
    result.map((el) => {
      el.map((e) => {
        const idx = quack.findIndex((e) => e === el);
        console.log("idx ", idx);
        // console.log(el, idx);
      });
      // const idx = quack.findIndex((e) => e === el);

      // if (idx + 1 === index) {
      //   el.push(arr[i]);
      // }
      //el의 마지막이 quack의 kau
    });
  }
}

console.log(result);
