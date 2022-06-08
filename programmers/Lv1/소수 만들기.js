/*
	다소 무식하게 삼중 for 루프를 돌렸다. 나중에 순열과 조합 알고리즘 구현을 스터디해봐야겠다.
*/

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        const sum = nums[i] + nums[j] + nums[z];
        answer += isPrimeNum(sum);
      }
    }
  }
  console.log(answer);
  return answer;
}

function isPrimeNum(num) {
  let check = 1;
  for (let s = 2; s < num; s++) {
    if (num % s === 0) {
      check = 0;
    }
  }
  return check;
}
