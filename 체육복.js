function solution(n, lost, reserve) {
  const before = lost.length;
  let after = lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let i = 0;

  while (true) {
    let num = lost[i];
    if (reserve.indexOf(num) != -1) {
      reserve.splice(reserve.indexOf(num), 1);
      after -= 1;
    } else if (reserve.indexOf(num - 1) != -1) {
      reserve.splice(reserve.indexOf(num - 1), 1);
      after -= 1;
    } else if (reserve.indexOf(num + 1) != -1) {
      reserve.splice(reserve.indexOf(num + 1), 1);
      after -= 1;
    }
    i += 1;
    if (reserve.length === 0 || i === lost.length) break;
  }
  let answer = n - before + (before - after);

  return answer;
}
