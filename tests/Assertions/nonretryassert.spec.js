//These assertions allow to test any conditions, but do not auto-retry. Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.
//https://playwright.dev/docs/test-assertions#non-retrying-assertions

import { test, expect } from '@playwright/test';

test('non retry assertion', async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page', { waitUntil: 'domcontentloaded' })
    
    const title = await page.title();
    expect(title).toBe('Web Testing Page');

    const pageURL = await page.url();
    expect(pageURL).toBe('https://seleniumbase.io/demo_page');
    expect(pageURL).toContain('demo_page');
});