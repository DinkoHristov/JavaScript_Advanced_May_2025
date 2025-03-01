function solve() {
  const correctAnswers = {
    1: 'onclick',
    2: 'JSON.stringify()',
    3: 'A programming API for HTML and XML documents',
  };

  let mainDivElement = document.getElementById('quizzie');
  let ulElement = document.getElementsByClassName('quiz-step step1 current');

  mainDivElement.addEventListener('click', startQuiz);

  let sectionsCount = ulElement.length;
  let currentQuestion = 1;

  let hiddenSections = Array.from(document.getElementsByClassName('hidden'));

  let correctAnswersCount = 0;
  let resultElement = document.getElementById('results').getElementsByClassName('results-inner')[0].querySelector('h1');

  function startQuiz(e) {
    if (e.target.tagName === 'P' && currentQuestion <= sectionsCount) {
      let currentAnswer = e.target.textContent;
      let correctAnswer = correctAnswers[currentQuestion];

      if (currentAnswer === correctAnswer) {
        correctAnswersCount++;
      }

      currentQuestion++;

      let currentSection = e.target.parentElement.parentElement.parentElement.parentElement;
      currentSection.style.display = 'none';

      if (hiddenSections.length > 0) {
        let nextSection = hiddenSections.shift();
        nextSection.style.display = 'block';
      }
    }

    if (currentQuestion > 3) {
      if (correctAnswersCount === 3) {
        resultElement.textContent = 'You are recognized as top JavaScript fan!';
        resultElement.parentElement.parentElement.style.display = 'block';
      } else {
        resultElement.textContent = `You have ${correctAnswersCount} right answers`;
        resultElement.parentElement.parentElement.style.display = 'block';
      }
    }
  }
}