import {test,expect} from '@playwright/test';
import fs  from 'fs';

const testdatapath = 'Data/data.json'

const testData = JSON.parse(fs.readFileSync(testdatapath, 'utf8'));

for (const user of testData) {
    test(`Login with user ${user.username}, ${user.password}`, async({page})=>{
        test.slow();
        await page.goto('https://www.saucedemo.com/')

        await page.locator('#user-name').fill(user.username);
        await page.locator('#password').fill(user.password);
        await page.locator('[data-test="login-button"]').click();
        await page.close();

    })
}