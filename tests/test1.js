// Підключення бібліотеки selenium-webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');

// Створення об'єкта драйвера
let driver = new Builder()
    .forBrowser('chrome') // Вказуємо, що використовуємо браузер Chrome
    .build();

// Приклад тестового сценарію
async function exampleTest() {
    try {
        // Відкриття веб-сторінки
        await driver.get('https://www.example.com');
        
        // Виконання додаткових дій зі сторінкою, наприклад, пошук елементів, взаємодія з ними
        
        // Закриття браузера
        await driver.quit();
    } catch (error) {
        console.error('Something went wrong:', error.message);
    }
}

// Виклик функції тесту
exampleTest();
