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
    await page.type('input#searchInputBase', 'Adam');
    await page.click('button#searchFriendsButton');

    await Promise.race([
        page.waitForSelector('p#noUsersTypography'),
        page.waitForSelector('div#singleUser')
    ]);

    expect(await page.$('p#noUsersTypography')).toBeFalsy();
    expect(await page.$('div#singleUser')).toBeTruthy();

    let elements = await page.$$('button#followButton');
    let firstElement = await (await elements[0].getProperty('innerText')).jsonValue();

    await page.click("button#followButton");

    elements = await page.$$('button#followButton');
    firstElement = await (await elements[0].getProperty('innerText')).jsonValue();
    expect(firstElement).toBe("OBSERWUJESZ");

    browser.close();
}, 30000);