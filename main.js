
const generateBtn = document.getElementById('generate');
const numbersContainer = document.querySelector('.numbers');

generateBtn.addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    const numberElements = numbersContainer.querySelectorAll('.number');
    numbers.forEach((number, index) => {
        numberElements[index].textContent = number;
    });
});
