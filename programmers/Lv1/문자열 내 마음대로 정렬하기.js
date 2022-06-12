function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] === b[n]) {
      const arr = [a, b].sort();
      return arr[0] === b ? 1 : -1;
    }
  });
  return strings;
}

// 모범답안 localeCompare 이런 메서드도 있구나..

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
