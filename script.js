const quizData = [
    {
        question: 'How old is Google ?',
        a: '22',
        b: '20',
        c: '19',
        d: '21',
        correct: 'b',
    },
    {
        question: 'Which one is the smallest ocean in the World ?',
        a: 'Indian',
        b: 'Pacific',
        c: 'Atlantic',
        d: 'Arctic',
        correct: 'd',
    },
    {
        question: 'Total number of oceans in the World ?',
        a: '3',
        b: '5',
        c: '7',
        d: '12',
        correct: 'b',
    },
    {
        question: 'Which one of the following actors did not play James Bond ?',
        a: 'Daniel Craig',
        b: 'Pierce Brosman',
        c: 'Colin Firth',
        d: 'Sean Connery',
        correct: 'c',
    },
    {
        question: 'What is the boiling point temperature (water) ?',
        a: '50 °C',
        b: '150 °C',
        c: '100 °C',
        d: '200 °C',
        correct: 'c',
    },
    {
        question: 'Which fruit is associated with Isaac Newton ?',
        a: 'Apple',
        b: 'Banana',
        c: 'Pineapple',
        d: 'Pear',
        correct: 'a',
    },
    {
        question: 'Which one of the following scientists is known for his contributions to the science of evolution ?',
        a: 'Marie Curie',
        b: 'Thomas Edison',
        c: 'Stephen Hawking',
        d: 'Charles Darwin',
        correct: 'd',
    },
    {
        question: 'Which animal is not part of the Chinese zodiac ?',
        a: 'Horse',
        b: 'Cat',
        c: 'Dog',
        d: 'Monkey',
        correct: 'b',
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text")
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let answer = undefined;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {

    let answer = undefined

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer

}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    console.log(answer);


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at:${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Try Again</button>`
        }
    }

})