const puppeteer = require('puppeteer');

test('should navigate to the login page', async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{
            width:1000,
            height:1000
        }
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/');

    page.click("a#welcomeLoginPageButton");

    await page.waitForNavigation();

    await page.waitFor(2000);

    browser.close();
},30000);