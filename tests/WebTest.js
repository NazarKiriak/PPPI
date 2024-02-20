const { Builder, By, Key, until } = require('selenium-webdriver');

async function testWebsite() {
    // Створення драйвера браузера (Chrome)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Відкриття веб-сайту
        await driver.get('http://127.0.0.1:8080/'); // Замініть URL на URL вашого веб-сайту

        // Отримання заголовка сторінки
        let title = await driver.getTitle();
        console.log('Заголовок сторінки:', title);

        // Перевірка заголовка
        if (title.includes("Black Beer Brigade")) { // Замініть "Мій веб-сайт" на відповідний заголовок вашої сторінки
            console.log('Тест пройшов успішно: заголовок сторінки вірний.');
        } else {
            console.log('Тест не пройшов: заголовок сторінки не вірний.');
        }
    } catch (error) {
        console.error('Виникла помилка:', error);
    } finally {
        // Закриття браузера
        await driver.quit();
    }
}

// Виклик функції для тестування веб-сайту
testWebsite();
