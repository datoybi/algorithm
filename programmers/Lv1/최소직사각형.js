/*
	문제 꼼꼼히 읽어보기
*/

function solution(sizes) {
  const big = [];
  const small = [];

  sizes.forEach((card) => {
    const [x, y] = card;
    let bigEl, smallEl;

    if (x < y) {
      bigEl = y;
      smallEl = x;
    } else {
      bigEl = x;
      smallEl = y;
    }
    big.push(bigEl);
    small.push(smallEl);
  });

  return Math.max(...big) * Math.max(...small);
}
