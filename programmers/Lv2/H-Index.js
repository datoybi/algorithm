// 생각보다 너무 휘리릭 풀려서 놀램 lv2맞나..

function solution(citations) {
  const arr = [...citations];
  let answer = 0;

  for (let i = 0; i <= arr[0]; i++) {
    const cnt = arr.filter((el) => i <= el).length;
    if (i <= cnt) {
      answer = Math.max(i);
    }
  }
  return answer;
}
