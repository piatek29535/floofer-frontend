const puppeteer = require('puppeteer');

test('should navbar link navigate to particular the section', async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{
            width:1000,
            height:1000
        }
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/');

    await page.click("a.Opinie.nav-link");
    
    browser.close();
},30000);