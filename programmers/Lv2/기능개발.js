function solution(progresses, speeds) {
  const arr = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));
  const answer = [];
  let j = 0;
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[j]) {
      cnt += 1;
    } else {
      answer.push(cnt);
      cnt = 1;
      j = i;
    }
  }
  answer.push(cnt);
  return answer;
}
