function solution(num) {
  let i = 0;
  while (i < 501) {
    if (num === 1) break;
    if (i === 500) {
      i = -1;
      break;
    }
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
    i += 1;
  }
  return i;
}
