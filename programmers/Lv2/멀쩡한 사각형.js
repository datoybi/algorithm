// 공식을 모르면 못푸는 문제
// 공식 : W + H - (W, H의 최대 공약수)
function solution(w, h) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return w * h - (w + h - gcd(w, h));
}
