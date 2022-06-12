function solution(n) {
  let char = "수";
  let answer = "";

  for (let i = 0; i < n; i++) {
    answer += char;
    char = char === "수" ? "박" : "수";
  }
  return answer;
}
