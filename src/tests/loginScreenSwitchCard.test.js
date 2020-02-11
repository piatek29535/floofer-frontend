const puppeteer = require('puppeteer');


test('should switch tab while on the login screen', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/signUp');

    await page.click('#register');
    await page.waitFor(2000);

    await page.click('#login');
    await page.waitFor(2000);

    await browser.close()
},30000);