// 와 이문제에 몇시간을 할애한건지.. 그래도 맞춰서 너무 뿌듯하다!!

function solution(rows, columns, queries) {
  const arr = [];
  const answer = [];

  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(j + 1 + i * columns);
    }
    arr.push(temp);
  }

  for (let i = 0; i < queries.length; i++) {
    let result = [];
    let idx = 0;
    const [y1, x1, y2, x2] = queries[i];
    let y = y1 - 1; // row가 세로 y
    let x = x1 - 1; // column이 가로 x
    let num = arr[y][x];

    while (true) {
      let temp;
      if (idx === 0) {
        if (x < Math.max(x1, x2) - 1) {
          temp = arr[y][x + 1];
          arr[y][x + 1] = num;
          num = temp;
          x += 1;
          result.push(arr[y][x]);
        } else {
          idx += 1;
        }
      }
      if (idx === 1) {
        if (y < Math.max(y1, y2) - 1) {
          temp = arr[y + 1][x];
          arr[y + 1][x] = num;
          num = temp;
          y += 1;
          result.push(arr[y][x]);
        } else {
          idx += 1;
        }
      }
      if (idx === 2) {
        if (x > Math.min(x1, x2) - 1) {
          temp = arr[y][x - 1];
          arr[y][x - 1] = num;
          num = temp;
          x -= 1;
          result.push(arr[y][x]);
        } else {
          idx += 1;
        }
      }
      if (idx === 3) {
        if (y > Math.min(y1, y2) - 1) {
          temp = arr[y - 1][x];
          arr[y - 1][x] = num;
          num = temp;
          y -= 1;
          result.push(arr[y][x]);
        } else {
          idx += 1;
          if (y1 - 1 === y && x1 - 1 === x) {
            break;
          }
        }
      }
    }
    answer.push(Math.min(...result));
  }

  return answer;
}
