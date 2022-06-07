/*
 잘 풀었는데 조금 아쉬웠던 점이 해당 버튼이 엄지로부터 얼마나 떨어져있냐라는 함수를 구할 때(getCount()) 조금 헤맸다. 
 어떻게 구해야되는지 잘 몰랐는데 잠깐의 힌트를 얻은게 큰 x에서 작은 x를 빼고 큰 y에서 작은 y를 뺀 것을 더하면 엄지를 얼마나 이동해야 하는지 나왔다.
 그점은 생각하지 못한 점이여서 아쉽다.

 가독성을 위해 switch-case를 적용하였고 if-else 문보다 if문으로 쪼개어 가독성을 높였다(이부분은 조금 더 고민해보기)
*/
function solution(numbers, hand) {
  let left = [3, 0];
  let right = [3, 2];
  let answer = "";
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  numbers.forEach((num) => {
    const numXY = getLocation(keypad, num);
    switch (num) {
      case 1:
      case 4:
      case 7:
        [answer, left] = setLeft(answer, numXY);
        break;
      case 3:
      case 6:
      case 9:
        [answer, right] = setRight(answer, numXY);
        break;
      default:
        const leftCnt = getCount(left, numXY);
        const rightCnt = getCount(right, numXY);

        if (leftCnt < rightCnt) {
          [answer, left] = setLeft(answer, numXY);
        }
        if (leftCnt > rightCnt) {
          [answer, right] = setRight(answer, numXY);
        }
        if (leftCnt === rightCnt) {
          if (hand === "left") {
            [answer, left] = setLeft(answer, numXY);
          }
          if (hand === "right") {
            [answer, right] = setRight(answer, numXY);
          }
        }
    }
  });
  return answer;
}

function setLeft(answer, numXY) {
  answer += "L";
  const left = numXY;
  return [answer, left];
}

function setRight(answer, numXY) {
  answer += "R";
  const right = numXY;
  return [answer, right];
}

// 해당 버튼의 위치 얻기
function getLocation(keypad, num) {
  let nx, ny;
  keypad.forEach((el, idx) => {
    const y = el.indexOf(num);
    if (y !== -1) {
      nx = idx;
      ny = y;
    }
  });
  return [nx, ny];
}

// 현재 위치로부터 해당 버튼이 얼마나 떨어져있는지 체크
function getCount(a, b) {
  const [ax, ay] = a;
  const [bx, by] = b;
  let sum = Math.max(ax, bx) - Math.min(ax, bx);
  sum += Math.max(ay, by) - Math.min(ay, by);

  return sum;
}
