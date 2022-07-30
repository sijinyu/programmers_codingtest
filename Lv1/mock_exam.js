function solution(answers) {
  student_answers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let goodAnswers = student_answers.reduce((acc, student, i) => {
    acc[i] = answers.filter((v, i) => v === student[i % student.length]);
    return acc;
  }, []);
  const max = Math.max(
    goodAnswers[0].length,
    goodAnswers[1].length,
    goodAnswers[2].length
  );
  const answer = [];
  for (i = 0; i < goodAnswers.length; i++) {
    if (goodAnswers[i].length === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
