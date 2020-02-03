const puppeteer = require('puppeteer');

test('should notification be read', async () => {
    const browser = await puppeteer.launch({
        headless:false,
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/signUp');

    await page.click('#login');
    await page.type('input#login', 'adamex12343@gmail.com');
    await page.click('input#password');
    await page.type('input#password', 'qweasdzxc');
    await page.click('button#loginButton');

    await Promise.race([
        page.waitForNavigation({waitUntil:'networkidle0'}),
        page.waitForSelector('div#errorSnackbar')
    ]);

    expect(await page.$('div#errorSnackbar')).toBeFalsy();

    await page.click('button#notificationButton');

    await page.waitForSelector('div#notifications');
    let elements = await page.$$('.singleNotification');
    expect(elements.length).toBeGreaterThan(0);

    let firstElement = await elements[0].$('#isReadCheckbox');
    await firstElement.click();

    await page.waitFor(10000);

    let firstElementCheckbox = await (await firstElement.getProperty('checked')).jsonValue();

    expect(firstElementCheckbox).toBeTruthy();

    browser.close();
},30000);