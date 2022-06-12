function solution(s) {
  return (
    [...s.toLowerCase()].filter((el) => "p" === el).length ===
    [...s.toLowerCase()].filter((el) => "y" === el).length
  );
}

// 신박하다 - split을 해서 길이가 같으면 return!
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
