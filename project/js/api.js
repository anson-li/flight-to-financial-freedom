const baseUrl = "/api/";
let currentStats = null;
const sessionHistory = [];
const gameHistory = [];

const restartSession = () => {
  $.post(baseUrl + "restart/", (res) => {
    console.log("Restarted user session");
  });
}

const submitQuestion = (sectionNum, questionNum, answerNum) => {
  const data = {
    "answers": [
      {
        "section": sectionNum.toString(),
        "question": questionNum.toString(),
        "answer": answerNum.toString()
      }
    ]
  };

  if (Array.isArray(answerNum)) {
    data.answers = [];
    answerNum.forEach(function(item, index) {
      data.answers.push({
        "section": sectionNum.toString(),
        "question": questionNum.toString(),
        "answer": item.toString(),
      });
    });
  }

  // console.error(data.answers);

  $.post(baseUrl, JSON.stringify(data), (res) => {
    _updateStatsOnResponse(res, sectionNum, questionNum, answerNum);
  });
}

// test the current state of the API (doesn't update anything on screen)
const getCurrentStats = () => {
  $.get(baseUrl, (res) => {
    console.error(JSON.parse(res));
    window.localStorage.setItem('currentStats', res);
  });
}

const _updateStatsOnResponse = (res, sectionNum, questionNum, answerNum) => {
  currentStats = JSON.parse(res);
  sessionHistory.push({
    section: sectionNum,
    question: questionNum,
    wealth: currentStats,
    answers: answerNum
  });

  // We are not currently using these bars
  // setProgressBarValue("assets", currentStats.assets);
  // setProgressBarValue("liabilities", currentStats.liability);
  // setProgressBarValue("wealth", currentStats.assets - currentStats.liability);
  setWealthValues();
  refreshProgressBars();
};