const puppeteer = require('puppeteer');

test('should add post dialog close', async () => {
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
    await page.waitForSelector('button#addPostButton')

    await page.click('button#addPostButton');
    await page.waitForSelector('#addPostDialog',{timeout:3000});

    await page.waitFor(1000);

    await page.click('button#closeAddPostDialogButton');
    await page.waitForSelector('#addPostDialog',{visible:false});
    await page.waitFor(1000);

    browser.close();
},30000);