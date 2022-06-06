/*
	best practice 
	const rank = [6, 6, 5, 4, 3, 2, 1]; 를 두어 
	best, worst를 구하는 대신 바로 대입하는 방법도 있는듯 하다.
*/

function solution(lottos, win_nums) {
  let same = 0;
  win_nums.forEach((win) => {
    lottos.forEach((element) => {
      if (win === element) same += 1;
    });
  });

  const zero = lottos.filter((el) => 0 === el).length;
  const best = 7 - (same + zero) > 6 ? 6 : 7 - (same + zero);
  const worst = 7 - same > 6 ? 6 : 7 - same;

  const answer = [best, worst];
  return answer;
}
