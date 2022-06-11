/*
	와 꽤나 오랜 시간 걸린 문제... 3게임으로 나누는게 좀 꼬였었다. 
	그래도 결국 풀긴했는데 너무 코드가 지저분하다.. 정규식 알아두면 참 좋을것 같다는 생각이 들었다.
*/

function solution(dartResult) {
  const result = getSplitedArray([...dartResult]);
  const answer = calcuate(result);
  return answer;
}

function getSplitedArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let score = -1;
    let bonus = "";
    let option = "";

    if (parseInt(arr[i], 10) === 1 && parseInt(arr[i + 1], 10) === 0) {
      score = 10;
      i += 2;
    } else {
      score = parseInt(arr[i], 10);
      i += 1;
    }
    if (score >= 0) {
      bonus = arr[i];
    }
    if (score >= 0 && bonus) {
      if (arr[i + 1] === "#" || arr[i + 1] === "*") {
        option = arr[i + 1];
        result.push([score, bonus, option]);
        i += 1;
      } else {
        result.push([score, bonus]);
      }
    }
  }
  return result;
}

function calcuate(arr) {
  const result = [];
  for (let i = 0; i < 3; i++) {
    let score = arr[i][0];

    if (arr[i][1] === "D") {
      score = arr[i][0] ** 2;
    }
    if (arr[i][1] === "T") {
      score = arr[i][0] ** 3;
    }
    if (arr[i][2] === "*") {
      if (i === 0) {
        score *= 2;
      } else {
        score *= 2;
        result[i - 1] *= 2;
      }
    }
    if (arr[i][2] === "#") {
      score *= -1;
    }
    result.push(score);
  }
  const sum = result.reduce((acc, el) => acc + el);
  return sum;
}


// 모범답안
function solution(dartResult) {
	const bonus = { 'S': 1, 'D': 2, 'T': 3 },
				options = { '*': 2, '#': -1, undefined: 1 };

	let darts = dartResult.match(/\d.?\D/g);

	for (let i = 0; i < darts.length; i++) {
			let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
					score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

			if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

			darts[i] = score;
	}

	return darts.reduce((a, b) => a + b);
}