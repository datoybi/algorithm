/*
	아놔 문제를 잘못 읽었다.. 왜인지 모르겠는데 인행이 없어질때까지 basket에 넣는줄 알고 왜 안되지? 했다..
	그냥 moves를 한바퀴 돌리면 될것을...뿌엥 
	!: 조건 잘보고 문제 잘 읽기
*/
function solution(board, moves) {
  let answer = 0;
  let basket = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][move - 1];
      if (doll != 0) {
        board[i][move - 1] = 0;
        const last = basket[basket.length - 1] || 0;
        if (last === doll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });

  return answer;
}
