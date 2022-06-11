function solution(price, money, count) {
  let total = 0;
  let i = 1;

  while (true) {
    if (i > count) break;
    total += price * i;
    i += 1;
  }

  return total - money > 0 ? total - money : 0;
}
	