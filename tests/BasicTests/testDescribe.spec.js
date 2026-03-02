import { test, expect } from '@playwright/test';

test.describe('Group Testcases', () => {

    test('sauce demo Login using valid cred', async ({ page }) => {
        await page.goto('https://saucedemo.com/', { waitUntil: 'networkidle' });
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();


    });

    test('Verify should not login', async ({ page }) => {
        await page.goto('https://saucedemo.com/', { waitUntil: 'networkidle' });
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('senel');
        await page.locator('[data-test="login-button"]').click();

        const errorMessage = await page.locator('[data-test="error"]').textContent();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });


})