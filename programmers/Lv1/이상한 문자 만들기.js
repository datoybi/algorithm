function solution(s) {
  const splited = s.split(" ");
  const answer = [];

  splited.map((outer, j) => {
    temp = "";
    [...outer].map((el, i) => {
      if (i % 2 === 0) temp += outer[i].toUpperCase();
      else temp += outer[i].toLowerCase();
    });
    answer.push(temp);
  });
  return answer.join(" ");
}
