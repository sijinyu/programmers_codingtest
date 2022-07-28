function solution(record) {
  const userIds = [];
  const message = {
    Leave: "나갔습니다.",
    Enter: "들어왔습니다.",
  };
  var answer = [];

  const records = record
    .map((v) => v.split(" "))
    .filter((item) => {
      [state, id, username] = item;
      if (username) {
        userIds[id] = username;
      }
      return state !== "Change";
    });
  return (answer = records.map((v) => `${userIds[v[1]]}님이 ${message[v[0]]}`));
}
