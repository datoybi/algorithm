function solution(s) {
  let arr = [...s];
  arr.splice(0, 2);
  arr.splice(arr.length - 2, 2);
  arr = arr.join("").split("},{");
  arr.sort((a, b) => a.length - b.length);

  const answer = [];
  arr.forEach((el) => {
    let splited = el.split(",");
    if (splited.length === 1) answer.push(...splited);
    else answer.push(...splited.filter((el2) => !answer.includes(el2)));
  });

  return answer.map((el) => parseInt(el, 10));
}

// 논리는 비슷한 풀이인데 훨씬 간결하게 구현했다.
function solution(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
      if (n) {
        return arr.concat(v.filter((f) => !arr.includes(f)));
      }
      return v;
    }, []);
}
