let question_index = 0;
let multipleAnswers = [];

function getQuestionBody(question_index){
    const question_body = `
        <div id="question_body">
            ${questions[question_index].question_body}
        </div
    `;

    let options_single_board = `
    <div class="rightTextMain">
        Choose one
    </div>
    <div class="question_board">
        <div class="text">
            <div id="option_1" class="highlight ml4 single">
                ${questions[question_index][1]}
            </div>
            <div id="option_2" class="highlight ml4 single">
                ${questions[question_index][2]}
            </div>
            <div id="option_3" class="highlight ml4 single">
                ${questions[question_index][3]}
            </div>`;

            if (typeof(questions[question_index].option4) != 'undefined') {
                options_single_board += `
                <div id="option_4" class="highlight ml4 single">
                ${questions[question_index].option4 || ''}
                    </div>
                `;
            }

            options_single_board += `
        </div>
    </div>`;

    let options_multiple_board = `
    <div class="rightTextMain">
        Choose <b>multiple</b>
    </div>
    <div class="question_board">
        <div class="text">
            <div id="option_1" class="highlight ml4 multiple">
                ${questions[question_index][1]}
            </div>
            <div id="option_2" class="highlight ml4 multiple">
                ${questions[question_index][2]}
            </div>
            <div id="option_3" class="highlight ml4 multiple">
                ${questions[question_index][3]}
            </div>`;

            console.log(typeof(questions[question_index].option4));

            if (typeof(questions[question_index].option4) != 'undefined') {
                options_multiple_board += `
                <div id="option_4s" class="highlight ml4 multiple">
                ${questions[question_index].option4 || ''}
                </div>
                `;
            }

            options_multiple_board += `
        </div>
    </div>
    <button id="finalise_button" class="bbtn mlb2">
        FINALISE
    </button>
    `;
    
    var options_board;
    if (questions[question_index].question_type == 'single') {
        options_board = options_single_board;
    } else {
        options_board = options_multiple_board;
    }
    return { question_body, options_board };
}

function updateProgressBar() {
    const meters = document.querySelectorAll('svg[data-value] .meter');
    meters.forEach( (path) => {
      let length = path.getTotalLength();
      let value = Math.max((question_index/ 5) * 100);
      console.log(value);
      path.parentNode.setAttribute('data-value', value);
      let to = length * ((5 - question_index) / 5); // 6 questions are available
      path.getBoundingClientRect();
      path.style.strokeDashoffset = Math.max(0, to);  
      console.log(path.style.strokeDashoffset);
    });
  }

function loadResults() {
    $('#balanceStatement').hide();

    anime.timeline({loop: false})
    .add({
        targets: ['#balanceStatement', '#progress-svg'],
        opacity: [1,0],
        easing: "easeInOutQuad",
        duration: 1050,
    });

    const question_body = `
    <div id="question_body" style="opacity: 0">
        You're on your way to becoming a decision superstar!
        <div id="field-summary">
        <div id="assets-summary" class="">
          Assets 
          <br>
          <p class='value'>$0</p>
        </div>
        <div id="liabilities-summary" class="">
          Liabilities
          <br>
          <p class='value'>$0</p>
        </div>
        <div id="wealth-summary" class="">
          Your Wealth
          <br>
          <p class='value'>$0</p>
        </div>
        </div>
    </div>
    `;

    const question_board = `
    <div id="question_board" style="opacity: 0">
        <div id="results" class="mom">
        </div>
    </div>
    `;

    document.getElementById("leftText").innerHTML = question_body;
    document.getElementById("rightText").innerHTML = question_board;    

    getCurrentStats();
    let currentStates = JSON.parse(window.localStorage.getItem('currentStats'));
    window.localStorage.setItem('resultCounter', 1);

    const answerCode = currentStates.choices[1][1].answerPicked;
    document.getElementById("results").innerHTML = `
    <div id="question-1" class="childRow">
        <div id="result-question">QUESTION - ${questions[0].question_simplified}</div>
        <div id="result-answer">DECISION - ${questions[0][answerCode]}</div>
        <div id="result-blurb">${currentStates.choices[1][1].blurb}</div>
        <div id="result-other">${Math.round(currentStates.choices[1][1].answerTotal / currentStates.choices[1][1].total * 100)}% of people chose this answer.</div>  
    </div>
    <button id="new_result_button" class="bbtn">Next Decision</button>
    `;

    anime.timeline({loop: false})
    .add({
        targets: ['#question_board', '#question_body'],
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1050,
    });

    // Wrap every lestter in a span
    $('.ml4').each(function(){
        $(this).html($(this).text().replace(/(.)/g, "<span class='letter'>$&</span>"));
    });

    setWealthValues();
    const highestValue = currentStats.assets > currentStats.liability ? currentStats.assets : currentStats.liability;
    setProgressBarValue("assets-summary", currentStats.assets, highestValue);
    setProgressBarValue("liabilities-summary", currentStats.liability, highestValue);
    setProgressBarValue("wealth-summary", currentStats.assets - currentStats.liability, highestValue);
    refreshProgressBars();

    onClickOption();
}

function updateResult() {
    let currentStates = JSON.parse(window.localStorage.getItem('currentStats'));
    let resultCounter = parseInt(window.localStorage.getItem('resultCounter'));
    resultCounter += 1;
    window.localStorage.setItem('resultCounter', resultCounter);
    const answerCode = currentStates.choices[1][resultCounter].answerPicked;
    document.getElementById("results").innerHTML = "";
    var resultCount = `
        <div id="question-${resultCounter}" class="childRow">
            <div id="result-question">QUESTION - ${questions[resultCounter - 1].question_simplified}</div>
            <div id="result-answer">DECISION - ${questions[resultCounter - 1][answerCode]}</div>
            <div id="result-blurb">${currentStates.choices[1][resultCounter].blurb}</div>
            <div id="result-other">${Math.round(currentStates.choices[1][resultCounter].answerTotal / currentStates.choices[1][resultCounter].total * 100)}% of people chose this answer.</div>  
        </div>
        `;
    if (resultCounter < 5) {
        resultCount += `
            <button id="new_result_button" class="bbtn">Next Decision</button>
        `
    }
    document.getElementById("results").innerHTML = resultCount;    
    onClickOption();
}

function getNextQuestion() {
    question_index += 1;
    updateProgressBar();
    
    anime.timeline({loop: false})
    .add({
        targets: ['.rightTextMain', '.question_board', '#question_body', '#finalise_button'],
        opacity: [1,0],
        easing: "easeInOutQuad",
        duration: 1050,
    });
    
    setTimeout(function(){ 
        document.getElementById("leftText").innerHTML = "";
        document.getElementById("rightText").innerHTML = "";
        const nextQuestion = getQuestionBody(question_index);

        if (questions[question_index].section != window.localStorage.getItem('section')) {
            window.localStorage.setItem('section', questions[question_index].section);
            loadResults();
        } else {
            document.getElementById("leftText").innerHTML += nextQuestion.question_body;
            document.getElementById("rightText").innerHTML += nextQuestion.options_board;    
            
            // Wrap every letter in a span
            $('.ml4').each(function(){
                $(this).html($(this).text().replace(/(.)/g, "<span class='letter'>$&</span>"));
            });
    
            anime.timeline({loop: false})
            .add({
                targets: ['.ml4 .letter', '.question_board', '.rightTextMain', '#question_body', '#finalise_button'],
                opacity: [0, 1],
                easing: "easeInOutQuad",
                delay: function(el, i) {
                    return 2 * (i+1);
                }
            });
    
            // refresh the content in the page
            onClickOption();
        }
    }, 1050);
}

function onClickOption() {
    $("#new_result_button").click(function() {
        updateResult();
    });
    $("#finalise_button").click(function() {
        submitQuestion(questions[question_index].section, question_index + 1, multipleAnswers);
        getNextQuestion();
    });
    $('.single').click(function() {
        const id = this.id;
        const answerNum = id.toString().substr(id.length - 1);
        submitQuestion(questions[question_index].section, question_index + 1, answerNum);
        getNextQuestion();
    });
    $('.multiple').click(function() {
        if ($(this).hasClass('highlight-selected')){
            $(this).removeClass('highlight-selected');
        } else {
            $(this).addClass('highlight-selected');
        }
        const id = this.id;
        const answerNum = id.toString().substr(id.length - 1);
        multipleAnswers.push(answerNum);
    });
}

$('document').ready(function(){
    const question = getQuestionBody(question_index);
    document.getElementById("leftText").innerHTML += question.question_body;
    document.getElementById("rightText").innerHTML += question.options_board;
    window.localStorage.setItem('section', 1);

    onClickOption();
});


