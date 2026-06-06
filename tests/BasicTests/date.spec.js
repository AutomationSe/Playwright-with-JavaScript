import {test,expect} from '@playwright/test'


test("Date Test", async({page})=>{

    const expYear = 2026;
    const expMonth = 11; // Numeric month (1 = January, 12 = December)
    const day = 12;

    const date = new Date


    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Navigate and open the datepicker FIRST before any locator usage
    await page.goto('https://demo.automationtesting.in/Datepicker.html', { waitUntil: 'networkidle' });
    await page.click('#datepicker1');

    // Removed unnecessary `await` from page.locator() calls
    const nextButton = page.locator('.ui-datepicker-next');
    const previousButton = page.locator('.ui-datepicker-prev');

    // Changed `const` to `let` so it can be reassigned
    let correctDatePicked = false;

    while (!correctDatePicked) {

        // Re-fetch year and month text on every loop iteration (no stale values)
        const yearText = await page.locator('.ui-datepicker-year').textContent();
        const monthText = await page.locator('.ui-datepicker-month').textContent();

        // Parse year to int, and convert month name to number
        const currentYear = parseInt(yearText.trim());
        const currentMonth = monthNames.indexOf(monthText.trim()) + 1; // "December" → 12

        if (expMonth < 1 || expMonth > 12) {
            throw new Error('Invalid month value. Month should be between 1 and 12.');
        }

        if (currentYear === expYear && currentMonth === expMonth) {
            // Re-query alldays inside the loop so it's never stale
            const allDays = page.locator('.ui-datepicker-calendar tbody tr td a');
            await allDays.nth(day - 1).click();
            correctDatePicked = true;

        } else if (currentYear < expYear || (currentYear === expYear && currentMonth < expMonth)) {
            await nextButton.click();

        } else {
            await previousButton.click();
        }
    }


});