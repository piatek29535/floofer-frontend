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
    await page.type('input#email', 'justForTests@gmail.com');
    await page.click('input#password');
    await page.type('input#password', 'qweasdzxc');
    await page.click('input#country');
    await page.type('input#country', 'testCountry');
    await page.click('input#town');
    await page.type('input#town', 'testTown');

    await page.click('button#submitButton');

    let email = await page.$eval('input#email', e => e.getAttribute('aria-invalid'));
    let password = await page.$eval('input#password', e => e.getAttribute('aria-invalid'));

    expect(email).toBe("false");
    expect(password).toBe("false");

    await Promise.race([
        page.waitForSelector('div#registerSnackbar'),
        page.waitForSelector('div#successDialog')
    ]);

    expect(await page.$('div#registerSnackbar')).toBeFalsy();
    expect(await page.$('div#successDialog')).toBeTruthy();

    await page.waitFor(4000);

    await page.click('button#confirmRegistrationButton');

    await browser.close();
}, 30000);