const puppeteer = require('puppeteer');

test('should navigate while collapsed', async () => {
    const browser = await puppeteer.launch({
        headless:false,
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/');

    await page.click("button.navbar-toggler");
    await page.waitFor(1000);

    await page.click("a.Opinie.nav-link");
    await page.waitFor(1000);

    await page.click("button.navbar-toggler");
    await page.waitFor(1000);

    browser.close();
},30000);