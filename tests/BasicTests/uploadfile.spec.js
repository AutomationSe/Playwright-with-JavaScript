import {test,expect} from "@playwright/test";

let url = 'https://easyupload.io/'
let url2 = 'https://www.west-wind.com/wconnect/wcscripts/fileupload.wwd'

test('Single File Upload Test', async ({ page }) => {
    test.slow();
    await page.goto(url2, {waitUntil: 'networkidle'});
    await page.locator('[name="upload"]').setInputFiles('Uploads/image1.jpg', 'Uploads/image2.jpg')
    
    await expect(page.locator('#filename')).toContainText('image1.jpg', 'image2.jpg')

});

test('Buffr File Upload Test', async ({ page }) => {
    test.slow();
    await page.goto(url2, {waitUntil: 'networkidle'});
    await page.locator('[name="upload"]').setInputFiles({
        name: 'playwright.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Test')
    })

    await page.waitForTimeout(1000*10);

});

test('Upload files : Different format', async ({ page }) => {
    test.slow();
    await page.goto(url, {waitUntil: 'networkidle'})
    const filechooserpromise = page.waitForEvent('filechooser')
    await page.locator('#dropzone').click();
    const filechooser = await filechooserpromise;
    await filechooser.setFiles('Uploads/image1.jpg');
    await page.waitForTimeout(10000);

});