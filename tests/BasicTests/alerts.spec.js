import { test, expect } from '@playwright/test'

test('alert test', async ({ page }) => {
    test.slow();
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', { waitUntil: 'domcontentloaded' });



    // 2. Trigger the action SECOND
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    page.on('dialog', async (dialog) => {
        console.log(dialog.message()); // No await needed here
        await dialog.accept();         // This clicks "OK"
    });

    // 3. Optional: Verify the result on the page
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');



})