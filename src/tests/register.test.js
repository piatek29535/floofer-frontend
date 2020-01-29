const puppeteer = require('puppeteer');

test('should allow user to register account', async () => {
    const browser = await puppeteer.launch({
        headless:false,
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/signUp');

    await page.click('#register');
    await page.click('input#name');
    await page.type('input#name', 'testName');
    await page.click('input#surname');
    await page.type('input#surname', 'testSurname');
    await page.click('input#email');
    await page.type('input#email', 'email');
    await page.click('input#password');
    await page.type('input#password', 'qweasd');

    let element = await page.evaluate('document.querySelector("input#password").getAttribute("aria-invalid")');

    expect(element).toBe("true")

    await browser.close();
}, 100000);