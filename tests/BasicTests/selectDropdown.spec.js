const {test, expect} = require("@playwright/test");

test('Handling Select Based dropdown', async ({page})=>{
    await page.goto('https://saucedemo.com/');

    await page.locator('//*[contains(@placeholder, "User")]').type('standard_user');

    await page.locator('//*[contains(@placeholder, "Pass")]'). fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.locator('.product_sort_container').selectOption({index : 2})

    await page.pause();

})