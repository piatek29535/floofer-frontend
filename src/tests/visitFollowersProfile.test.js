const puppeteer = require('puppeteer');

test('should user visit followers profile', async () => {
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

    await page.waitForSelector('#followersAmount');
    await page.click('#followersAmount');

    await page.waitForSelector('#followersFolloweeDialog',{timeout:4000});

    let dialogTitleElement = await page.$('#followersFolloweeDialogTitle');
    let dialogTitleText = await(await dialogTitleElement.getProperty('innerText')).jsonValue();
    let amount = parseInt(dialogTitleText.split(' ')[1]);

    expect(amount).toBeGreaterThan(0);

    let followers = await page.$$('#listOfFollowers');
    await followers[0].click();

    await page.waitForNavigation();
    await page.waitFor(2000);

    await browser.close();
}, 30000);