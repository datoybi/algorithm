function solution(p) {
  if (!p) return "";
  if (checkPerfect(p)) return p; // 1
  let start = 0;
  let end = 0;
  const arr = [...p];
  var answer = "";
  let idx = split(arr);
  let [u, v] = split(arr);

  while (true) {
    // let [u, v] = split(arr);
    let temp = "";
    console.log(" u : " + u);
    console.log(" v : " + v);

    if (checkPerfect(u)) {
      // 3
      answer += u.join(""); // 3-1
      [u, v] = split(v);
    } else {
      // 4
      temp = `(${v.join("")})`;
      u.shift();
      u.pop();
      u.reverse();
      temp += u.join("");
      console.log(temp);
      if (checkPerfect(temp)) {
        answer += temp;
        break;
      } else {
      }
    }
  }
  return answer;
}

function split(arr) {
  let start = 0;
  let end = 0;
  let idx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") start += 1;
    if (arr[i] === ")") end += 1;
    if (start === end) {
      idx = i;
      break;
    }
  }
  let u = arr.slice(0, idx + 1);
  let v = arr.slice(idx + 1, arr.length);
  return [u, v];
}

function checkPerfect(p) {
  let check = true;
  let cnt = 0;
  let start = 0;
  let end = 0;

  [...p].forEach((el) => {
    if (cnt === 0 && el === ")") check = false;
    if (el === ")") {
      end += 1;
      cnt -= 1;
    } else if (el === "(") {
      start += 1;
      cnt += 1;
    }
  });
  return check;
}
