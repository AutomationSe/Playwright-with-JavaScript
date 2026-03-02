//The following assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.
//https://playwright.dev/docs/test-assertions#auto-retrying-assertions

import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://seleniumbase.io/demo_page', {waitUntil: 'domcontentloaded'})

    //Assertion for checbox
    const checkbox = await page.locator('#checkBox2');
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    //Assert Topic
    const topic = await page.locator("//h1[normalize-space()='Demo Page']")
    await expect(topic).toContainText('Demo');

    const link = await page.locator('#myLink1')
    await expect(link).toHaveAttribute('href', 'https://seleniumbase.com');

    //Check how many links have on page

    const links = await page.locator('a');
    await expect(links).toHaveCount(7);
    console.log(await links.allTextContents())

    //Check Dropdown
    const dropDown = await page.locator('#mySelect');
    await expect(dropDown).toHaveClass('selectClass')
    
});