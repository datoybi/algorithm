function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let left = [3, 0];
  let right = [3, 2];
  let answer = "";

  numbers.forEach((num) => {
    switch (num) {
      case 1:
      case 4:
      case 7:
        answer += "L";
        break;
      case 3:
      case 6:
      case 9:
        answer += "R";
        break;
      default:
        let leftCnt = 0;
        let n = 0;
        while (n < 6) {
          // 근거는 잘 모르겟음
          for (let i = 0; i < 4; i++) {
            const [dx, dy] = direction[i];
            const [lx, ly] = left;
            console.log(dx, dy, lx, ly, dx + lx, dy + ly);
            if (
              dx + lx < 4 &&
              dy + ly < 3 &&
              keypad[dx + lx][dy + ly] === num
            ) {
              console.log("this " + num);
              leftCnt = i + 1;
              left = [dx + lx, dy + ly];
              break;
            }
          }
          n += 1;
        }
        console.log(leftCnt);
        console.log(left);
    }
  });

  return answer;
}
