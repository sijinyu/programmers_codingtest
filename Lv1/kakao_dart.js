//[1차]다트게임 문제풀이

class Dart {
  constructor() {
    this.scores = [];
    this.calculation = (value) => {
      if (parseInt(value) || value == "0") {
        this.scores.push(value);
      } else {
        const lastIndex = this.scores.length - 1;
        switch (value) {
          case "S":
            this.scores[lastIndex] **= 1;
            break;
          case "D":
            this.scores[lastIndex] **= 2;
            break;
          case "T":
            this.scores[lastIndex] **= 3;
            break;
          case "*":
            this.scores[lastIndex - 1] *= 2;
            this.scores[lastIndex] *= 2;
            break;
          case "#":
            this.scores[lastIndex] = -this.scores[lastIndex];
            break;

          default:
            break;
        }
      }
    };
  }
}
function solution(dartResult) {
  const dart = new Dart();
  let onlyInt = "";
  const arr = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (parseInt(dartResult[i]) || dartResult[i] == "0") {
      onlyInt += dartResult[i];
    } else {
      arr.push(onlyInt);
      arr.push(dartResult[i]);
      onlyInt = "";
    }
  }
  for (let i = 0; i < arr.length; i++) {
    dart.calculation(arr[i]);
  }
}

//다른사람 풀이

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

solution("1D2S3T*");
