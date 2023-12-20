/*
	https://www.acmicpc.net/problem/1244
	스위치 켜고 끄기
	어우 문제좀 잘 읽자... 출력을 20개 이상이면 다음줄에 출력해야하는데 그것 때문에 맞왜틀 외쳤다.
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
let switches = input.shift().split(" ").map(Number);
const M = +input.shift();
const arr = input.map((el) => el.split(" ").map(Number));

arr.forEach(([gender, num]) => {
  // 남자면 배수
  if (gender === 1) {
    switches.forEach((x, i) => {
      if ((i + 1) % num === 0) {
        switches[i] = switches[i] === 0 ? 1 : 0;
      }
    });
  }

  // 여자면 대칭되는 수 바꾸기
  if (gender === 2) {
    switches[num - 1] = switches[num - 1] === 0 ? 1 : 0;
    for (let i = 0; i < N / 2; i++) {
      if (switches[num - 1 - i] === switches[num - 1 + i]) {
        if (num - 1 - i !== num - 1 + i) {
          switches[num - 1 - i] = switches[num - 1 - i] === 0 ? 1 : 0;
          switches[num - 1 + i] = switches[num - 1 + i] === 0 ? 1 : 0;
        }
      } else {
        break;
      }
    }
  }
});

for (let i = 0; i < switches.length; i += 20) {
  console.log(switches.slice(i, i + 20).join(" "));
}
