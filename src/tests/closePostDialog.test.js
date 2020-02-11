const puppeteer = require('puppeteer');

test('should post dialog close', async () => {
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

    await page.waitForSelector('#singlePost', {timeout:4000});

    let posts = await page.$$('#singlePost');
    expect(posts.length).toBeGreaterThan(0);

    let singlePost = posts[0];
    await singlePost.click();

    await page.waitForSelector('#singlePostDialog');
    await page.waitFor(2000);

    await page.mouse.click(20,20);

    await page.waitForSelector('#singlePostDialog',{hidden:true});

    await browser.close();
}, 30000);