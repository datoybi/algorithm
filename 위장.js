// 테스트는 통과하는데 제출하면 다틀림 ㅜㅜ
function solution(clothes) {
  const arr = [...clothes];

  const result = arr.reduce((acc, el, i) => {
    acc[el[1]] = [...(acc[el[1]] || []), el[0]];
    return acc;
  }, []);

  console.log(result);

  let answer = 0;
  if (Object.keys(result).length > 1) {
    answer = 1;
    for (let i in result) {
      answer *= result[i].length;
    }
  }
  return answer + arr.length;
}
