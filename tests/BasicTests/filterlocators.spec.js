import {test,expect} from '@playwright/test';

test('filter test', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("//button[contains(.,'Login')]").click();

    await page.getByAltText('profile picture').waitFor({ state: 'visible' });
    const checkleave = await page.getByRole('listitem').filter({hasText: 'Leave'});
    //checkleave.click();

    //Filter by Child / descendent
    await page
    .getByRole('listitem')
    .filter({has: page.getByRole('link', {name: 'cc'})}).click();

})

test('test google', async ({ page, context }) => {
    //await context.tracing.start({ screenshots: true, snapshots: true })
    await page.goto('https://www.saucedemo.com/', { waitUntil: 'networkidle' });

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    //await context.tracing.stop({ path: 'trace.zip' })
    
});

