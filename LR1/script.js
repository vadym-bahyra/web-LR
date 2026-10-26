// Спільні дані студента (можете змінити на свої)
const myName = "Вадим";
const mySurname = "Багира";
const journalNumber = 1;

// ==========================================
// РІВЕНЬ 4-6 БАЛІВ
// ==========================================

// Завдання 1
document.getElementById('btn46-1').addEventListener('click', () => {
    const out = document.getElementById('out46-1');
    alert("Завдання 1: Натисніть ОК, щоб продовжити");
    out.innerHTML = `<p>Hello, ${mySurname} ${myName}!</p>`;
});

// Завдання 2
document.getElementById('btn46-2').addEventListener('click', () => {
    const out = document.getElementById('out46-2');
    const isOk = confirm("Завдання 2: Натисніть Ок або Відміна");
    out.innerHTML = isOk 
        ? "<p>Була натиснута кнопка: <strong>Ок</strong></p>" 
        : "<p>Була натиснута кнопка: <strong>Відміна</strong></p>";
});

// Завдання 3
document.getElementById('btn46-3').addEventListener('click', () => {
    const out = document.getElementById('out46-3');
    const lastDigit = journalNumber % 10;
    let html = `<h4>Таблиця множення для числа ${lastDigit}:</h4><ul>`;
    for (let i = 1; i <= 10; i++) {
        html += `<li>${lastDigit} x ${i} = ${lastDigit * i}</li>`;
    }
    html += "</ul>";
    out.innerHTML = html;
});

// ==========================================
// РІВЕНЬ 7-9 БАЛІВ
// ==========================================

// Завдання 1
document.getElementById('btn79-1').addEventListener('click', () => {
    const out = document.getElementById('out79-1');
    out.innerHTML = ''; // очищення
    const p = document.createElement('p');
    if (journalNumber % 2 === 0) {
        p.textContent = `Ваш номер у журналі (${journalNumber}) — парне число.`;
        p.style.color = 'green';
        p.style.fontWeight = 'bold';
    } else {
        p.textContent = `Ваш номер у журналі (${journalNumber}) — непарне число.`;
        p.style.color = 'red';
        p.style.fontWeight = 'bold';
    }
    out.appendChild(p);
});

// Завдання 2
document.getElementById('btn79-2').addEventListener('click', () => {
    const out = document.getElementById('out79-2');
    const password = myName.substring(0, 3) + (journalNumber * 2);
    out.innerHTML = `<p>Згенерований пароль: <strong style="color:#d35400;">${password}</strong></p>`;
});

// Завдання 3
document.getElementById('btn79-3').addEventListener('click', () => {
    const out = document.getElementById('out79-3');
    out.innerHTML = ''; // очищення
    
    const mark1 = parseFloat(prompt("Введіть першу оцінку:", "10"));
    const mark2 = parseFloat(prompt("Введіть другу оцінку:", "11"));
    const mark3 = parseFloat(prompt("Введіть третю оцінку:", "9"));
    
    if(!isNaN(mark1) && !isNaN(mark2) && !isNaN(mark3)) {
        const average = (mark1 + mark2 + mark3) / 3;
        const resultDiv = document.createElement('div');
        resultDiv.id = journalNumber;
        resultDiv.innerHTML = `<strong>Середній бал:</strong> ${average.toFixed(2)} (Елемент створено з id="${journalNumber}")`;
        out.appendChild(resultDiv);
    } else {
        out.innerHTML = "<p style='color:red'>Введено некоректні або неповні дані.</p>";
    }
});

// Завдання 4
document.getElementById('btn79-4').addEventListener('click', () => {
    const out = document.getElementById('out79-4');
    out.innerHTML = "<h4>Список студентів:</h4>";
    
    const count = parseInt(prompt("Введіть кількість студентів у групі:", "3"));
    if(!isNaN(count) && count > 0) {
        for (let i = 0; i < count; i++) {
            const studentName = prompt(`Введіть прізвище та ім'я студента №${i + 1}:`);
            if (studentName) {
                out.innerHTML += `<p>${i + 1}. ${studentName}</p>`;
            }
        }
    } else {
         out.innerHTML = "<p>Кількість студентів не задана.</p>";
    }
});

// ==========================================
// РІВЕНЬ 10-12 БАЛІВ
// ==========================================

// Завдання 1
document.getElementById('btn1012-1').addEventListener('click', () => {
    const out = document.getElementById('out1012-1');
    out.innerHTML = '<h4>Літери імені (наведіть мишу на кожну):</h4>';
    const ul = document.createElement('ul');
    
    for (const char of myName) {
        const li = document.createElement('li');
        li.textContent = char;
        li.style.cursor = 'pointer';
        li.style.fontSize = '18px';
        li.style.fontWeight = 'bold';
        li.style.width = 'fit-content';
        li.style.margin = '5px 0';
        li.style.padding = '2px 8px';
        li.style.backgroundColor = '#e8f4f8';
        li.style.borderRadius = '4px';
        
        li.addEventListener('mouseenter', () => {
            alert(`Це літера ${char}`);
        });
        ul.appendChild(li);
    }
    out.appendChild(ul);
});

// Завдання 2
document.getElementById('btn1012-2').addEventListener('click', () => {
    const out = document.getElementById('out1012-2');
    out.innerHTML = '<h4>Список студентів (до Відміни):</h4>';
    
    while (true) {
        const student = prompt("Введіть прізвище та ім'я студента (або натисніть 'Відміна' для завершення):");
        if (student === null) break;
        if (student.trim() !== "") {
            out.innerHTML += `<p>• ${student}</p>`;
        }
    }
});

// Завдання 3
let blocksShown = false;
document.getElementById('btn1012-3').addEventListener('click', (e) => {
    const out = document.getElementById('out1012-3');
    const btn = e.target;
    
    if (blocksShown) {
        out.innerHTML = '';
        blocksShown = false;
        btn.textContent = "Показати блоки";
    } else {
        out.innerHTML = '';
        for (const char of mySurname) {
            const block = document.createElement('div');
            block.textContent = char;
            block.className = 'letter-block';
            block.addEventListener('mouseenter', () => {
                alert(`Це літера [ ${char} ]`);
            });
            out.appendChild(block);
        }
        blocksShown = true;
        btn.textContent = "Сховати блоки";
    }
});
