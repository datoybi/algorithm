function solution(n, arr1, arr2) {
  const binary1 = getBinary(arr1, n);
  const binary2 = getBinary(arr2, n);
  const answer = [];

  binary1.forEach((outer, i) => {
    let ans = "";
    outer.forEach((inner, j) => {
      let tmp = "#";
      if (inner === binary2[i][j]) {
        tmp = inner === "1" ? "#" : " ";
      }
      ans += tmp;
    });
    answer.push(ans);
  });
  return answer;
}

function getBinary(arr, n) {
  const result = [];
  arr.forEach((el) => {
    let changed = el.toString(2);
    while (n > changed.length) {
      changed = "0".concat(changed);
    }
    result.push([...changed]);
  });
  return result;
}
