const bookmark = document.querySelector('.card--bookmark');
const answerButton = document.querySelector('#showAnswer');
const answer = document.querySelector('#firstAnswer');
const darkModeToggle = document.querySelector('#darkmodeToggle')
const body = document.body




darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
});


bookmark.addEventListener('click', (e) => {
    bookmark.classList.toggle('bookmark--click')
})

answerButton.addEventListener('click', (e) => {
    
    answer.classList.toggle('hidden')
    const initialText = 'Show Answer'

    if(answerButton.textContent.toLowerCase().includes(initialText.toLowerCase())){
         answerButton.textContent = 'Hide Answer'
    } else {
        answerButton.textContent = initialText
    }
    
    
})