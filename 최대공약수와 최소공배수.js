function solution(n, m) {
  let answer = [1, n * m];

  const n1 = getDivide(n);
  const m1 = getDivide(m);
  n1.map((n) => {
    if (m1.includes(n)) {
      answer[0] = Math.max(answer[0], n);
    }
  });

  const n2 = getMultiply(n, m);
  const m2 = getMultiply(m, n);
  n2.map((n) => {
    if (m2.includes(n)) {
      answer[1] = Math.min(answer[1], n);
    }
  });

  return answer;
}

function getDivide(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
}

function getMultiply(num, other) {
  const arr = [];
  let i = 1;
  while (true) {
    if (num * i > num * other) break;
    arr.push(num * i);
    i += 1;
  }
  return arr;
}

// 모범답안 1
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// 모범답안 2
function gcdlcm(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}
