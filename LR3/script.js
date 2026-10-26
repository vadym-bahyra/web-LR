// ==========================================
// Рівень 4-6 балів
// ==========================================

// Завдання 1
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function showGreeting(fullName, age) {
    alert(`Hello, ${fullName}! You are ${age} years old.`);
}

function task46_1() {
    const firstName = prompt("Введіть ім'я:");
    const lastName = prompt("Введіть прізвище:");
    const age = prompt("Введіть вік:");
    
    if (firstName && lastName && age) {
        const fullName = getFullName(firstName, lastName);
        showGreeting(fullName, age);
    }
}

// Завдання 2
function checkGrade(score) {
    if (score >= 10 && score <= 12) return "Excellent";
    if (score >= 7 && score <= 9) return "Good";
    if (score >= 4 && score <= 6) return "Satisfactory";
    if (score >= 0 && score < 4) return "Fail";
    return "Invalid score";
}

function showResultStudent(name, grade) {
    alert(`Student: ${name}\nGrade: ${grade}`);
}

function getStudentInfo() {
    const name = prompt("Введіть ім'я студента:");
    const score = parseFloat(prompt("Введіть бал (0-12):"));
    if (name && !isNaN(score)) {
        const grade = checkGrade(score);
        showResultStudent(name, grade);
    }
}

function task46_2() {
    getStudentInfo();
}

// Завдання 3
function calculateTip(amount, percent = 10) {
    return (amount * percent) / 100;
}

function showResultTip(amount, tip) {
    const total = amount + tip;
    alert(`Bill: ${amount} грн\nTip (${(tip/amount)*100}%): ${tip} грн\nTotal: ${total} грн`);
}

function task46_3() {
    const amount = parseFloat(prompt("Введіть загальну суму рахунку (грн):"));
    if (!isNaN(amount)) {
        const tip = calculateTip(amount); // За замовчуванням 10%
        showResultTip(amount, tip);
    }
}


// ==========================================
// Рівень 7-9 балів
// ==========================================

// Завдання 1
function startGreetingTimer(message, seconds, callback) {
    console.log(`Таймер запущено. Очікування ${seconds} секунд...`);
    setTimeout(() => {
        alert(message);
        callback();
    }, seconds * 1000);
}

function task79_1() {
    startGreetingTimer("Це повідомлення з'явилось після затримки!", 2, () => {
        alert('Time is up!');
    });
}

// Завдання 2
function calculate(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Помилка: ділення на нуль';
        default: return 'Invalid operation';
    }
}

function showResultCalc() {
    const a = parseFloat(prompt("Введіть перше число:"));
    const b = parseFloat(prompt("Введіть друге число:"));
    const operation = prompt("Введіть операцію (+, -, *, /):");
    
    if (!isNaN(a) && !isNaN(b)) {
        const result = calculate(a, b, operation);
        alert(`Результат: ${result}`);
    }
}

function task79_2() {
    showResultCalc();
}

// Завдання 3
function createClickCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Count: ${count}`);
        alert(`Count: ${count}`);
    };
}

const myCounter = createClickCounter();

function task79_3() {
    myCounter();
}


// ==========================================
// Рівень 10-12 балів
// ==========================================

// Завдання 1: Генератор випадкових чисел
function* randomGenerator(min, max) {
    while (true) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let randGen;

function initRandomGenerator() {
    const min = parseInt(prompt("Введіть мінімальне значення:"), 10);
    const max = parseInt(prompt("Введіть максимальне значення:"), 10);
    
    if (!isNaN(min) && !isNaN(max) && min < max) {
        randGen = randomGenerator(min, max);
        document.getElementById('out').innerText = `Генератор готовий (від ${min} до ${max}). Натисніть 'Next number'.`;
    } else {
        alert("Некоректні межі! Мінімальне значення має бути меншим за максимальне.");
    }
}

document.getElementById('next').addEventListener('click', () => {
    if (randGen) {
        document.getElementById('out').innerText = `Випадкове число: ${randGen.next().value}`;
    } else {
        alert("Спочатку задайте межі (кнопка '1. Задати межі')!");
    }
});

// Завдання 2: Генератор паролів
function* passwordGenerator() {
    let password = "";
    while (true) {
        let char = yield;
        if (char === 'done') {
            return password;
        }
        if (char) {
            password += char;
        }
    }
}

function runPasswordGenerator() {
    const passGen = passwordGenerator();
    passGen.next(); // Запуск генератора
    
    while (true) {
        const input = prompt("Введіть символ для пароля (або напишіть 'done' для завершення):");
        if (input === 'done') {
            const finalPass = passGen.next('done').value;
            alert(`Ваш згенерований пароль: ${finalPass}`);
            break;
        } else if (input) {
            passGen.next(input);
        }
    }
}

// Завдання 3: Чат-бот (Генератор діалогів)
function* chatBot() {
    let name = yield "Hi! What is your name?";
    let answer = yield `Nice to meet you, ${name}! How are you?`;
    yield "Goodbye!";
}

function runChatBot() {
    const bot = chatBot();
    
    // Крок 1
    let question = bot.next().value;
    let nameAnswer = prompt(question);
    
    if (!nameAnswer) return; // Відміна
    
    // Крок 2
    question = bot.next(nameAnswer).value;
    let howAreYouAnswer = prompt(question);
    
    if (!howAreYouAnswer) return; // Відміна
    
    // Крок 3
    let endMessage = bot.next(howAreYouAnswer).value;
    alert(endMessage);
}

// Завдання 4: Втрата контексту
const user = {
    name: 'Невідомий',
    say() {
        alert(`Hello, ${this.name}`);
    }
};

function initUser() {
    const inputName = prompt("Введіть ваше ім'я:");
    if (inputName) {
        user.name = inputName;
        alert(`Ім'я збережено: ${user.name}. Тепер натисніть 'Say'.`);
    }
}

// Прив'язуємо контекст, щоб 'this' всередині say() вказував на об'єкт user, 
// а не на кнопку, яка викликає подію
const btnHello = document.getElementById('hello');
btnHello.addEventListener('click', user.say.bind(user));
