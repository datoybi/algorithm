function solution(arr) {
  let gcd = calculate(arr[0], arr[1]);
  lcm = (arr[0] * arr[1]) / gcd;

  for (let i = 2; i < arr.length; i++) {
    let a = lcm;
    let b = arr[i];
    gcd = calculate(a, b);
    lcm = (a * b) / gcd;
  }
  return lcm;
}

function calculate(a, b) {
  if (b === 0) return a;
  return a > b ? calculate(b, a % b) : calculate(a, b % a);
}

// 모범답안 최소공배수, 최대공약수는 이렇게 구하는거구나
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
