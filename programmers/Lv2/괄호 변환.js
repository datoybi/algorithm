/*
	몬가 재귀부분 틀린것같은데.. 한숨 쉬었다가 풀어야겠다 이문제는..ㅜㅜ
	될듯말듯하면서 안된다. 재귀부분에서 안되는 것 같은데 디버깅 할 에너지가 이젠 없다!@#
*/
function solution(p) {
  if (!p) return "";
  if (checkPerfect(p)) return p; // 1
  const arr = [...p];
  var answer = "";
  let idx = split(arr);
  let [u, v] = split(arr);

  while (true) {
    let temp = "";
    // console.log(' u : ' + u.join(''));
    // console.log(' v : ' + v.join(''));

    if (checkPerfect(u)) {
      // 3
      answer += u.join(""); // 3-1
      [u, v] = split(v);
    } else {
      // 4
      temp = `(${v.join("")})`; // 이부분이 틀린것 같은데.. 재귀가..
      u.shift();
      u.pop();
      u = [...u].map((el) => (el === "(" ? ")" : "("));
      temp += u.join("");
      console.log(temp);
      if (checkPerfect(temp)) {
        answer += temp;
        break;
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

// !:모범답안
function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
