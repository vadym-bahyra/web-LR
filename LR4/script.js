// ==========================================
// РІВЕНЬ I: Виконання прикладів з ходу роботи
// ==========================================
console.log("%c=== РІВЕНЬ I: Робота з об'єктами та масивами ===", "color: blue; font-weight: bold;");

console.log("--- Завдання 1: Робота з об'єктами ---");
let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
    }
};
book.bookInfo();
book.isRead = !book.isRead;
book.bookInfo();

console.log("--- Завдання 2: Робота з масивами та об'єктами ---");
let library = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false },
    { title: "1984", author: "George Orwell", year: 1949, isRead: true }
];

// Додаємо метод bookInfo для всіх книг у масиві для зручності
library.forEach(b => {
    b.bookInfo = function() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
    };
});

function displayLibrary() {
    console.log("Список книг у бібліотеці:");
    library.forEach(book => {
        if(book.bookInfo) book.bookInfo();
        else console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
    });
}
displayLibrary();

console.log("--- Додавання нової книги (push) ---");
library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false });
library[library.length - 1].bookInfo = function() { 
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`); 
};
displayLibrary();

console.log("--- Завдання 3: Робота з методами масивів ---");
library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання (зростання):", library);

let unreadBooks = library.filter(book => !book.isRead); 
console.log("Непрочитані книги:", unreadBooks);

let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", tolkienBook);

// Завдання 4: Взаємодія з користувачем винесено в функцію, яка викликається кнопкою на сторінці
function addBookToLibrary() {
    let title = prompt("Введіть назву книги:");
    if (!title) return;
    let author = prompt("Введіть автора книги:");
    let year = +prompt("Введіть рік видання книги:");
    let isRead = confirm("Чи прочитана книга?");
    
    let newBook = { title, author, year, isRead };
    newBook.bookInfo = function() { 
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`); 
    };
    library.push(newBook);
    console.log("--- Оновлений список книг ---");
    displayLibrary();
}


// ==========================================
// РІВЕНЬ II: Додаткові завдання
// ==========================================
console.log("%c=== РІВЕНЬ II: Додаткові методи та функції ===", "color: green; font-weight: bold;");

// 1. Додаємо метод markAsRead до об'єктів книг
library.forEach(book => {
    book.markAsRead = function() {
        this.isRead = true;
    };
});

if (unreadBooks.length > 0) {
    console.log(`Позначаємо книгу "${unreadBooks[0].title}" як прочитану за допомогою markAsRead()...`);
    unreadBooks[0].markAsRead();
    console.log(`Статус книги "${unreadBooks[0].title}" (Прочитана): ${unreadBooks[0].isRead}`);
}

// 2. Функція calculateAverageYear
function calculateAverageYear(lib) {
    if (lib.length === 0) return 0;
    let totalYears = lib.reduce((sum, book) => sum + book.year, 0);
    return Math.round(totalYears / lib.length);
}
console.log(`Середній рік видання всіх книг у бібліотеці: ${calculateAverageYear(library)}`);


// ==========================================
// РІВЕНЬ III: Індивідуальний проєкт (Музичний плейлист)
// ==========================================
console.log("%c=== РІВЕНЬ III: Індивідуальний проєкт (Музичний плейлист) ===", "color: purple; font-weight: bold;");

// Об'єкти: пісні з властивостями: назва, виконавець, тривалість, чи додано в обране.
let playlist = [
    { title: "Bohemian Rhapsody", artist: "Queen", duration: 354, isFavorite: true },
    { title: "X", artist: "System Of A Down", duration: 119, isFavorite: true },
    { title: "Blinding Lights", artist: "The Weeknd", duration: 200, isFavorite: true },
    { title: "Lounge Act", artist: "Nirvana", duration: 156, isFavorite: true }
];

// Додаємо метод для виведення інформації про пісню
playlist.forEach(song => {
    song.songInfo = function() {
        console.log(`Пісня: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration} сек, В обраному: ${this.isFavorite ? "Так" : "Ні"}`);
    };
});

function displayPlaylist() {
    console.log("Ваш музичний плейлист:");
    playlist.forEach(song => song.songInfo());
}
displayPlaylist();

// Сортування за тривалістю
console.log("--- Сортування та фільтрація плейлиста ---");
playlist.sort((a, b) => a.duration - b.duration);
console.log("Плейлист, відсортований за тривалістю (зростання):", playlist);

// Фільтрація улюблених пісень
let favoriteSongs = playlist.filter(song => song.isFavorite);
console.log("Улюблені пісні:", favoriteSongs);

// Пошук пісні за виконавцем
let queenSong = playlist.find(song => song.artist === "Queen");
console.log("Знайдена пісня гурту Queen:", queenSong);

// Взаємодія з користувачем (додавання нової пісні) через кнопку
function addSongToPlaylist() {
    let title = prompt("Введіть назву пісні:");
    if (!title) return;
    let artist = prompt("Введіть виконавця:");
    let duration = +prompt("Введіть тривалість у секундах:");
    let isFavorite = confirm("Додати в обране?");
    
    let newSong = { title, artist, duration, isFavorite };
    newSong.songInfo = function() {
        console.log(`Пісня: ${this.title}, Виконавець: ${this.artist}, Тривалість: ${this.duration} сек, В обраному: ${this.isFavorite ? "Так" : "Ні"}`);
    };
    
    playlist.push(newSong);
    console.log("--- Оновлений плейлист ---");
    displayPlaylist();
}
