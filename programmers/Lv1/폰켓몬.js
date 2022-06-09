// 중복제거엔 set을 사용해도 된다는 것 잊지말기

function solution(nums) {
  const N = nums.length;
  const newArray = isDuplicated(nums);
  const answer = N / 2 <= newArray.length ? N / 2 : newArray.length;
  return answer;
}

function isDuplicated(arr) {
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
}

// 이렇게
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
