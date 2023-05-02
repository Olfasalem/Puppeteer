const puppeteer = require('puppeteer');

(async () => {

    // browser selectors and content
    const loginPageURL = 'https://my.facturelive.com/login';
    const emailInputSelector = 'input[type="email"]';
    const passwordInputSelector = 'input[type="password"]';
    const emailInputContent = 'abc@gmail.com';
    const passwordInputContent = 'my very strong password';
    const loginButtonSelector = 'button';

    // launch browser
    const browser = await puppeteer.launch({ headless: false});

    // open new page
    const page = await browser.newPage();

    // go to login page
    await page.goto(loginPageURL);

    // fill login form
    await page.type(emailInputSelector, emailInputContent, {delay: 300});
    await page.type(passwordInputSelector, passwordInputContent, {delay: 300});

    // click login button
    await page.click(loginButtonSelector);

    //await browser.close();
})();
