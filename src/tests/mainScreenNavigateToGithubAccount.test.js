const puppeteer = require('puppeteer');

test('should navigate to particular user github account', async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:{
            width:1000,
            height:1000
        }
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000/');

    let openedPagesBefore = (await browser.pages()).length;

    await page.click("a.Skorzystaj.nav-link");
    await page.waitFor(3000);

    await page.click("div#nz");
    await page.waitFor(1000)

    let openedPagesAfter = (await browser.pages()).length;

    expect(openedPagesAfter).toBeGreaterThan(openedPagesBefore);

    let newPageTitle = await (await browser.pages())[openedPagesAfter-1].title();

    expect(newPageTitle).toContain("· GitHub")

    browser.close();
},30000);