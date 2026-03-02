import {test,expect} from '@playwright/test';

test('Hnadling radiobutton', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'networkidle' });
    

});

test('Hnadling checkboxes', async ({ page }) => {

    await page.goto('https://demoqa.com/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Forms' }).click();
    await page.getByRole('link', { name: 'Practice Form' }).click();
    // const formsLink = page.getByText('Forms');
    // await expect(formsLink).toBeVisible();
    await page.getByRole('link', { name: 'Practice Form' }).click();
    await page.locator("(//input[@id='hobbies-checkbox-1'])[1]").check();
    await page.locator("//input[@id='hobbies-checkbox-2']").click();
    await page.locator("(//input[@id='hobbies-checkbox-1'])[1]").uncheck();

});