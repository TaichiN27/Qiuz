'use strict';
const quiz = [
    {
      question: 'ゲーム史上、最も売れたゲーム機はどれ？',
      answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
      correct: 'ニンテンドーDS'
    }, {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
      correct: 'MOTHER2'
    }, {
      question: 'ファイナルファンタジーⅣの主人公の名前は？',
      answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
      correct: 'セシル'
    }
];
  
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

/*const question = '一番売れたゲームは？';
const answers = ['ファミコン', 'DS', 'PSP', 'swich'];
const correct = 'DS';*/


const $button = document.getElementsByTagName('button');

const setupQuiz = function() {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let i = 0
    while (i < $button.length) {
        $button[i].textContent = quiz[quizIndex].answers[i];
        i++;
    }
};
setupQuiz();

/*document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');
let i = 0

while (i < $button.length) {
    $button[i].textContent = answers[i];
    i++;
}*/
//$button[0].textContent = answers[0];
//$button[1].textContent = answers[1];
//$button[2].textContent = answers[2];
//$button[3].textContent = answers[3];

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        alert('正解');
        score++;
    } else {
        alert('残念');
    }

    quizIndex++;
    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        alert(`終了!! あなたの正解率は${score}/${quizIndex}`);
    }
};

let handleIndex = 0;

while (handleIndex < $button.length) {
    $button[handleIndex].addEventListener('click', (e) =>  {
        clickHandler(e);
    });    
    handleIndex++;  
}


