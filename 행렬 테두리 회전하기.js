function solution(rows, columns, queries) {
  const order = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // x, y
  const arr = [];

  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(j + 1 + i * columns);
    }
    arr.push(temp);
  }
  console.log(arr);

  for (let i = 0; i < queries.length; i++) {
    let result = [];
    let idx = 0;
    const [y1, x1, y2, x2] = queries[i];
    // console.log(`queries[i] : ${queries[i]}`);
    let y = y1 - 1; // row가 세로 y
    let x = x1 - 1; // column이 가로 x
    // console.log(`max x : ${Math.max(x1, x2)} , min x : ${Math.min(x1, x2)} , max y : ${Math.max(y1, y2)} , min y : ${Math.min(y1, y2)}`)
    for (let j = 0; j < 15; j++) {
      console.log(`x : ${x} , y : ${y} , ${arr[y][x]}`);
      if (idx === 0) {
        if (x + order[idx][0] < Math.max(x1, x2) - 1) {
          arr[y][x + 1] = arr[y][x];
          result.push(arr[y][x]);
          x += 1;
          // console.log(arr)
        } else {
          idx += 1;
        }
      }
      if (idx === 1) {
        if (y + order[idx][0] <= Math.max(y1, y2) - 1) {
          arr[y][x + 1] = arr[y][x];
          result.push(arr[y][x]);
          y += 1;
        } else {
          idx += 1;
        }
      }
      if (idx === 2) {
        if (x + order[idx][0] > Math.min(x1, x2) - 1) {
          let temp = arr[y][x + 1];
          arr[y][x + 1] = arr[y][x];
          arr[y][x] = temp;
          result.push(arr[y][x]);
          x -= 1;
        } else {
          idx += 1;
        }
      }
      if (idx === 3) {
        if (y + order[idx][0] >= Math.min(y1, y2) - 1) {
          let temp = arr[y][x + 1];
          arr[y][x + 1] = arr[y][x];
          arr[y][x] = temp;
          result.push(arr[y][x]);
          y -= 1;
        } else {
          idx += 1;
          if (y1 - 1 === y && x1 - 1 === x) {
            console.log("done");
            break;
          }
        }
      }
    }
    console.log(arr);
    // console.log(Math.min(...result));
  }

  var answer = [];
  return answer;
}
