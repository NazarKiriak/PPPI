const { Builder, By, Key, until } = require('selenium-webdriver');

async function unsuccessfulTestCase() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Відкриття веб-сайту
    await driver.get('http://127.0.0.1:8080/');
    
    // Знаходимо елемент, якого немає на сторінці (припустимо, що цей елемент не існує)
    let nonExistentElement = await driver.findElement(By.id('non-existent-element'));
    
    // Якщо елемент знайдено, виводимо повідомлення про успіх, але це не має стати
    console.log('Елемент був успішно знайдений.');
  } catch (error) {
    // Обробка помилки, якщо елемент не знайдено
    console.log('Тест провалився: елемент не знайдено.');
  } finally {
    // Завершуємо сеанс драйвера
    await driver.quit();
  }
}

unsuccessfulTestCase();
