const puppeteer = require('puppeteer');

test('should image file chooser pop up', async () => {
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

    await page.click('#userAvatarButton');

    await page.waitForSelector('#avatarChangeButton');

    await Promise.all([
        page.waitForFileChooser(),
        page.click('#avatarChangeButton')
    ]);

    page.waitFor(4000)

    browser.close();
},30000);