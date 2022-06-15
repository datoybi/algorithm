//W + H - (W, H의 최대 공약수) 공식을 모르면 아예 못푸는 문제 -.-ㅠㅠㅠ
function solution(w, h) {
  let min = Math.min(w, h);
  let max = Math.max(w, h);

  let answer = 0;
  if (min % max === 0) {
    answer = w * (w - 1);
  } else if (min / 2 === max / 3) {
    answer = min * max - 4 * (max / 3);
  } else if (min / 2 === max / 4) {
    answer = min * max - 4 * (max / 4);
  } else if (min / 2 === max / 5) {
    answer = min * max - 6 * (max / 5);
  }
  return answer;
}
