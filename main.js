
const generateBtn = document.getElementById('generate');
const numbersContainer = document.querySelector('.numbers');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : '');
    
    // Update button icon
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

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
