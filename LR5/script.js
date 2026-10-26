// Task 1: Температура
const fInput = document.getElementById('fahrenheit');
const cInput = document.getElementById('celsius');

fInput.addEventListener('input', () => {
    if(fInput.value !== '') {
        let f = parseFloat(fInput.value);
        cInput.value = (5/9 * (f - 32)).toFixed(2);
    } else { cInput.value = ''; }
});
cInput.addEventListener('input', () => {
    if(cInput.value !== '') {
        let c = parseFloat(cInput.value);
        fInput.value = (c * 9/5 + 32).toFixed(2);
    } else { fInput.value = ''; }
});

// Task 2: Таблиця множення (Введення)
let t2Score = 0, t2Total = 0, t2CorrectAnswer = 0;
const t2ScoreDisplay = document.getElementById('t2-score');
const t2TaskDisplay = document.getElementById('t2-task');
const t2Input = document.getElementById('t2-input');
const t2CheckBtn = document.getElementById('t2-check');
const t2NextBtn = document.getElementById('t2-next');
const t2Result = document.getElementById('t2-result');

function t2Generate() {
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    t2CorrectAnswer = a * b;
    t2TaskDisplay.innerText = `${a} x ${b} = `;
    t2Input.value = '';
    t2Result.innerText = '';
    t2CheckBtn.disabled = false;
}

t2NextBtn.addEventListener('click', t2Generate);
t2CheckBtn.addEventListener('click', () => {
    let ans = parseInt(t2Input.value);
    if(isNaN(ans)) return;
    t2Total++;
    
    if(ans === t2CorrectAnswer) {
        t2Score++;
        t2Result.innerText = 'Правильно!';
        t2Result.style.color = 'green';
    } else {
        t2Result.innerText = `Помилка, правильна відповідь «${t2CorrectAnswer}»`;
        t2Result.style.color = 'red';
    }
    t2ScoreDisplay.innerText = `Загальний рахунок ${Math.round((t2Score/t2Total)*100)}% (${t2Score} правильних відповідей з ${t2Total})`;
    t2CheckBtn.disabled = true;
});
t2Generate();

// Task 3: Таблиця множення (Радіокнопки)
let t3Score = 0, t3Total = 0, t3CorrectAnswer = 0;
const t3ScoreDisplay = document.getElementById('t3-score');
const t3TaskDisplay = document.getElementById('t3-task');
const t3Options = document.getElementById('t3-options');
const t3NextBtn = document.getElementById('t3-next');
const t3Result = document.getElementById('t3-result');

function t3Generate() {
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    t3CorrectAnswer = a * b;
    t3TaskDisplay.innerText = `${a} x ${b} = `;
    t3Result.innerText = '';
    t3Options.innerHTML = '';
    
    let answers = [t3CorrectAnswer];
    while(answers.length < 4) {
        let wrong = (Math.floor(Math.random() * 9) + 1) * (Math.floor(Math.random() * 9) + 1);
        if(!answers.includes(wrong)) answers.push(wrong);
    }
    answers.sort(() => Math.random() - 0.5); // shuffle
    
    answers.forEach(ans => {
        let label = document.createElement('label');
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 't3-ans';
        radio.value = ans;
        radio.addEventListener('change', () => {
            // Вибір варіанту відповіді є сигналом до початку перевірки
            document.getElementsByName('t3-ans').forEach(r => r.disabled = true);
            t3Total++;
            if(ans === t3CorrectAnswer) {
                t3Score++;
                t3Result.innerText = 'Правильно!';
                t3Result.style.color = 'green';
            } else {
                t3Result.innerText = `Помилка, правильна відповідь «${t3CorrectAnswer}»`;
                t3Result.style.color = 'red';
            }
            t3ScoreDisplay.innerText = `Загальний рахунок ${Math.round((t3Score/t3Total)*100)}% (${t3Score} правильних відповідей з ${t3Total})`;
        });
        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + ans));
        t3Options.appendChild(label);
    });
}
t3NextBtn.addEventListener('click', t3Generate);
t3Generate();

// Task 4: Ротатор фотографій
let imagesArray = [
    {path: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500', title: 'Porsche 911 GT3', description: 'Спортивний автомобіль із високою продуктивністю'},
    {path: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500', title: 'Chevrolet Corvette', description: 'Класичний американський маслкар'},
    {path: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500', title: 'Audi R8', description: 'Суперкар із повнопривідною системою Quattro'}
];

function initPhotoRotator(divId, imgArr) {
    const container = document.getElementById(divId);
    if(!container) return;
    
    let currentIndex = 0;
    
    const topBar = document.createElement('div');
    const counter = document.createElement('div');
    counter.style.marginBottom = '10px';
    topBar.appendChild(counter);
    
    const mainView = document.createElement('div');
    mainView.style.display = 'flex';
    mainView.style.alignItems = 'center';
    mainView.style.justifyContent = 'space-between';
    
    const prevBtn = document.createElement('a');
    prevBtn.href = '#';
    prevBtn.innerText = 'Назад';
    
    const img = document.createElement('img');
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    
    const nextBtn = document.createElement('a');
    nextBtn.href = '#';
    nextBtn.innerText = 'Вперед';
    
    mainView.appendChild(prevBtn);
    mainView.appendChild(img);
    mainView.appendChild(nextBtn);
    
    const bottomBar = document.createElement('div');
    bottomBar.style.marginTop = '15px';
    const titleSpan = document.createElement('div');
    titleSpan.style.fontWeight = 'bold';
    const descSpan = document.createElement('div');
    bottomBar.appendChild(titleSpan);
    bottomBar.appendChild(descSpan);
    
    container.appendChild(topBar);
    container.appendChild(mainView);
    container.appendChild(bottomBar);
    
    function updateView() {
        counter.innerText = `Фотографія ${currentIndex + 1} з ${imgArr.length}`;
        img.src = imgArr[currentIndex].path;
        titleSpan.innerText = imgArr[currentIndex].title;
        descSpan.innerText = imgArr[currentIndex].description;
        
        prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex === imgArr.length - 1 ? 'hidden' : 'visible';
    }
    
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(currentIndex > 0) { currentIndex--; updateView(); }
    });
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(currentIndex < imgArr.length - 1) { currentIndex++; updateView(); }
    });
    
    updateView();
}
initPhotoRotator('rotator', imagesArray);

// Task 5: Captcha
const captchaContainer = document.getElementById('captcha-container');
const captchaInput = document.getElementById('captcha-input');
const captchaCheckBtn = document.getElementById('captcha-check');
const captchaResult = document.getElementById('captcha-result');
let captchaValue = '';

const digitMap = {
    '0': ['111','101','101','101','111'],
    '1': ['010','110','010','010','111'],
    '2': ['111','001','111','100','111'],
    '3': ['111','001','111','001','111'],
    '4': ['101','101','111','001','001'],
    '5': ['111','100','111','001','111'],
    '6': ['111','100','111','101','111'],
    '7': ['111','001','010','010','010'],
    '8': ['111','101','111','101','111'],
    '9': ['111','101','111','001','111']
};

function generateCaptcha(digitsCount) {
    captchaContainer.innerHTML = '';
    captchaValue = '';
    for(let i = 0; i < digitsCount; i++) {
        let digit = Math.floor(Math.random() * 10).toString();
        captchaValue += digit;
        let digitDiv = document.createElement('div');
        digitDiv.className = 'captcha-digit';
        
        digitMap[digit].forEach(row => {
            for(let char of row) {
                let pixel = document.createElement('span');
                pixel.className = char === '1' ? 'pixel on' : 'pixel off';
                digitDiv.appendChild(pixel);
            }
        });
        captchaContainer.appendChild(digitDiv);
    }
}
generateCaptcha(2);

captchaCheckBtn.addEventListener('click', () => {
    if(captchaInput.value === captchaValue) {
        captchaResult.innerText = 'Правильно!';
        captchaResult.style.color = 'green';
    } else {
        captchaResult.innerText = 'Помилка';
        captchaResult.style.color = 'red';
    }
    generateCaptcha(2);
    captchaInput.value = '';
});
