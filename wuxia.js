//Quiz part code from https://simplestepscode.com/javascript-quiz-tutorial/

//for audio play
var audio = document.getElementById('audio1');
document.getElementById('play').addEventListener(
    'click',
    function () {        audio.play();    },
    false
);
//
document.getElementById('stop').addEventListener(
    'click',
    function () {        audio.pause();    },
    false
);

//quiz part
// create questions
var myQuestions = [
	{question: 'Who is the Northern Beggar(北丐) from The Legend of the Condor Heroes(射雕英雄传)?',
	answers: {
		a: 'Hong Yigong',
		b: 'Hong Sangong',
		c: 'Hong Qigong',
	},
	correctAnswer: 'c'}
];
//match with the three elements from index.html
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers= [];
        // for each available options
        for (option in questions[0].answers) {
        // add an html radio button
        answers.push(
            '<label>'
            + '<input type="radio" name="question' + 0 + '" value="' + option + '">'
            + ' ' + option + ': '
            + questions[0].answers[option]
            + '</label><br>'
        );
        }
    // push this question and its answers to the output
        output.push(
            '<div class="question">' + questions[0].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
        //  put  output list into one string of html and display
        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer) {
        // get answer containers 
        var answerContainers = quizContainer.querySelectorAll('.answers');
        // set up answers
        var userAnswer = '';
        var score = 0;
        // for each question...
        for (var i = 0; i < questions.length; i++) {
            // find selected answer
            userAnswer = (answerContainers[0].querySelector('input[name=question' + 0 + ']:checked') || {}).value;
            // if answer is correct
            if (userAnswer === questions[0].correctAnswer) {
                // add score
                score++;
                answerContainers[0].style.color = 'darkblue';
            }// if answer is wrong or blank
            else {
                 answerContainers[0].style.color = 'red';
            }
        }
        // show number of correct answers out of total
        resultsContainer.innerHTML = score + ' out of 1';
    }
    // show questions
    showQuestions(questions, quizContainer);
    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}