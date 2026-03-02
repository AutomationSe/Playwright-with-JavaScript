import {test,expect} from '@playwright/test';

test.beforeEach(async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
})

test('test', async ({ page }) => {
    const printlabel = await page.getByLabel('Password');
    console.log(printlabel);
    //await expect(page.locator("(//label[contains(text(),'Password')])[1]")).toBe('Password');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByAltText('profile picture').waitFor({ state: 'visible' });
    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
    await page.waitForTimeout(5000);
    
});