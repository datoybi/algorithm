function solution(sizes) {
  let addx = 0;
  let addy = 0;

  sizes.forEach((card) => {
    const [x, y] = card;
    addx += x;
    addy += y;
  });
  let width = addx * addy;

  console.log(addx);
  console.log(addy);

  sizes.forEach((card) => {
    const [x, y] = card;
    const change = (addx - x + y) * (addy - y + x);
    console.log("change : " + change);
    width = Math.min(change, width);
  });

  console.log(width);

  var answer = 0;
  return answer;
}

// 담에 풀기 지쳐서 머리가 더이상 안돌아감 ㅠㅠ
//
