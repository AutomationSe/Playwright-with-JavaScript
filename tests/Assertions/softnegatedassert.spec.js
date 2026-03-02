//Negating Metchers
//In Playwright, you can negate matchers using the .not property. This allows you to assert that a certain condition is not met. For example, if you want to check that an element does not contain specific text, you can use the following code:

import { test, expect } from '@playwright/test';

test('negating matchers', async ({ page }) => {

    await page.goto('https://seleniumbase.io/demo_page', { waitUntil: 'domcontentloaded' })

    const checkbox = await page.locator('#checkBox2');
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    //Assert Topic
    const topic = await page.locator("//h1[normalize-space()='Demo Page']")
    await expect(topic).toContainText('Demo');
    const link = await page.locator('#myLink1')
    await expect(link).toHaveAttribute('href', 'https://seleniumbase.com');

});

//Soft Assertions
//Soft assertions allow you to continue executing the test even if an assertion fails. This can be useful for gathering multiple pieces of information about the state of the application under test, even if some assertions fail. In Playwright, you can achieve this by using try-catch blocks around your assertions.

test('Soft Assertions', async ({ page }) => {

    await page.goto('https://seleniumbase.io/demo_page', { waitUntil: 'domcontentloaded' })

    const checkbox = await page.locator('#checkBox2');
    await checkbox.check();
    await expect.soft(checkbox).toBeChecked();

    //Assert Topic
    const topic = await page.locator("//h1[normalize-space()='Demo Page']")
    await expect(topic).toContainText('Demo');

    const link = await page.locator('#myLink1')
    await expect(link).toHaveAttribute('href', 'https://seleniumbase.com');

});