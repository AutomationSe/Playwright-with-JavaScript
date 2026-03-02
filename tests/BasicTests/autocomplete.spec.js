import {test,expect} from '@playwright/test'

test.describe('both tests', () => {

    test('Auto complete Test', async({page})=>{
        await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/', {waitUntil: 'networkidle'});
        const seq = page.locator("#autocomplete-default")
        await seq.pressSequentially('Aus', {delay: 100});
        
        const  sugest = page.getByText('Australia', { exact: true });
        await sugest.waitFor({ state: 'visible'});
        await sugest.click();
    
        await expect(seq).toHaveValue(/Australia/);
        
    })
    
    test('Auto complete Test 2', async({page})=>{
    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/', { waitUntil: 'networkidle' });
        
        const seq = page.locator("#autocomplete-default");
        await seq.pressSequentially('Aus', { delay: 100 });

        // 1. Get all elements as an array of locators
        const ulbox = await page.locator("//ul[contains(@id, 'autocomplete-default__listbox')]/li").all();

        // 2. Loop through the array
        for (const option of ulbox) {
            // 3. Get the actual text from the element
            const text = await option.innerText();

            if (text.trim() === "Australia") {
                await option.click(); // Click the locator, not the text string
                break;
            }
        }
    })
    
});

