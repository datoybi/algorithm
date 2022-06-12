function solution(s) {
  const lower = sort([...s].filter((el) => el === el.toLowerCase()));
  const upper = sort([...s].filter((el) => el === el.toUpperCase()));

  return `${lower.join("")}${upper.join("")}`;
}

function sort(arr) {
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  return arr;
}

// 모범답안 - 와우 깔끔하다
function solution(s) {
  return s.split("").sort().reverse().join("");
}
