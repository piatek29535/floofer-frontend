const puppeteer = require('puppeteer');

test('should user follow another user', async () => {
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

    await page.click('a#Znajomi');
    await page.click('button#searchForFriends');

    await page.click('input#searchInputBase');
    await page.type('input#searchInputBase', '');
    await page.click('button#searchFriendsButton');

    //!! rework this, to take every element from the generated array

    await page.waitForSelector('div#singleUser');

    const text = await page.$eval('div#singleUser', el => el.innerText);
    console.log(text)

    browser.close();
}, 30000);