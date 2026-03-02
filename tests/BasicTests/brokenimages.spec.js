//https://the-internet.herokuapp.com/broken_images

import { test, expect } from '@playwright/test'

test('Test Broken Images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images', { waitUntil: 'networkidle' });

    //Enable network interception
    await page.route('**/*', (route) => {

        route.continue().catch(() => { });

    });

    //use page.evaluate to identify the Images and count Broken images
    const brokenimages = await page.evaluate(async () => {
        const images = Array.from(document.querySelectorAll('img'));
        const brokenimages = [];

        for (const image of images) {
            const response = await fetch(image.src);
            if (response.status >= 400) {
                brokenimages.push(image.src);
            }
        }
        return brokenimages;

    })

    console.log("Total broken images", brokenimages)
})