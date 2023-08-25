const form = document.querySelector('#questionForm')
const questionContainer = document.querySelector('.question--card')
const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');
const characterCount1 = document.querySelector('.current1');
const characterCount2 = document.querySelector('.current2');
const maxLength = 150;

questionInput.addEventListener('input', (e) => {
    const currentLength = questionInput.value.length
    characterCount1.textContent = currentLength;
})

answerInput.addEventListener('input', (e) => {
    const currentLength = answerInput.value.length
    characterCount2.textContent = currentLength;
})



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const questionText = e.target.elements.question.value;
    const answerText = e.target.elements.answer.value;
    const tagText = e.target.elements.tag.value;
    
    const bookmark = document.createElement('img')
    bookmark.src = './images/bookmark.png'
    bookmark.classList.add('card--bookmark')
    questionContainer.append(bookmark)

    const questionCardHeader = document.createElement('h2');
    questionCardHeader.innerText = questionText;
    questionContainer.append(questionCardHeader);

    const showAnswer = document.createElement('button')
    showAnswer.classList.add('show--answer')
    showAnswer.innerHTML = 'Show Answer'
    questionContainer.append(showAnswer)

    const questionCardAnswer = document.createElement('h2');
    questionCardAnswer.classList.add('card--answer')
    questionCardAnswer.innerText = answerText;
    questionContainer.append(questionCardAnswer);

    showAnswer.addEventListener('click', (e) => {
       questionCardAnswer.classList.toggle('hidden')
       const initialText = 'Show Answer'

    if(showAnswer.textContent.toLowerCase().includes(initialText.toLowerCase())){
         showAnswer.textContent = 'Hide Answer'
    } else {
        showAnswer.textContent = initialText
    }

    })

    const questionCardTag = document.createElement('p');
    questionCardTag.classList.add('form-hashtag-container')
    questionCardTag.innerText = `#${tagText}`;
    questionContainer.append(questionCardTag)

    

    
    


})


