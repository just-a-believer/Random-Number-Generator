// Event Handlers
let numberArea = document.getElementById('generate')
let generateButton = document.getElementById('generateNumber')
//Event Targets




generateButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000 + 1)
    numberArea.innerHTML = randomNumber
})