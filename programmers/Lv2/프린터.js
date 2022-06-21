function solution(priorities, location) {
  let max = Math.max(...priorities);
  const arr = Object.entries(priorities);
  let cnt = 0;
  let answer = 0;

  while (true) {
    const [idx, value] = arr.shift();
    if (value != max) {
      arr.push([idx, value]);
    } else {
      cnt += 1;
      if (parseInt(idx, 10) === location) {
        answer = cnt;
        break;
      }
      max = 0;
      arr.filter((el) => {
        max = Math.max(el[1], max);
      });
    }
  }

  return answer;
}
