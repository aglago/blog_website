const questions = [
    {
        question: 'Which of these are you?',
        answers: [
            {
                text: 'Interested in photography, graphic design or animation? This could be a good fit for a career in UX/UI design, graphic design, or digital media.',
                index: 0
            },
            {
                text: 'Interested in music and audio production? This could lead to a career in audio engineering, sound design, or music production.',
                index: 1
            },
            {
                text:'Interested in video games and game design? This could lead to a career in game design, game development, or video game testing.',
                index: 2
            },
            {
                text: 'Interested in outdoor activities or physical fitness? This could lead to a career in wearable technology, fitness apps, or sports technology.',
                index: 3
            },
            {
                text: 'Interested in writing or journalism? This could lead to a career in technical writing, content creation, or social media management.',
                index: 4
            },
            {
                text: 'Interested in finance or economics? This could lead to a career in financial technology (fintech) or financial data analysis.',
                index: 5
            },
            {
                text: 'Interested in entrepreneurship or starting your own business? This could lead to a career in software development or web development for startups.',
                index: 6
            },
            {
                text: 'Interested in cooking and food? This could lead to a career in food technology, restaurant tech, or recipe apps.',
                index: 7
            },
            {
                text: 'Interested in education or teaching? This could lead to a career in educational technology, online learning platforms, or e-learning.',
                index: 8
            },
            {
                text: 'Interested in home improvement or DIY projects? This could lead to a career in home automation, smart home technology, or home improvement apps.',
                index: 9
            },
            {
                text: 'Interested in health and wellness? This could lead to a career in health tech, health apps, or medical technology.',
                index: 10
            }
        ]
    }
];


const question = document.getElementById('question');
const answerBtns = document.getElementById('answer_buttons');
const nextBtn = document.getElementById('nxt');

let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextBtn.innerHTML = 'Next';

    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNumber = currentQuestionIndex + 1;
    let lastQuestionNumber = questions.length;
    question.innerHTML = currentQuestionNumber + ' / ' + lastQuestionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML= answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);
    });
}

startQuiz();