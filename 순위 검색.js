function solution(info, query) {
  const infoArr = [];
  const queryArr = [];
  const answer = [];

  info.forEach((el) => infoArr.push(el.split(" ")));
  query.forEach((el) => {
    const splited = el.split(" and ");
    splited.push(...splited.pop().split(" "));
    queryArr.push(splited);
  });
  console.log(infoArr);
  console.log(queryArr);

  queryArr.forEach((query) => {
    let total = 0;
    console.log(query);
    infoArr.forEach((info) => {
      let cnt = 0;
      console.log(info);
      for (let i = 0; i < 5; i++) {
        console.log(query[i]);
        console.log(info[i]);
        if (i === 4) {
          cnt = query[i] === info[i];
        }
        cnt = query[i] === info[i] ? cnt + 1 : cnt;
      }
      console.log(cnt);
      if (cnt === 5) {
        total += 1;
      }
    });
    answer.push(total);
  });

  console.log(answer);

  return answer;
}
