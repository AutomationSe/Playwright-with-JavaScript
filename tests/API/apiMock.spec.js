//What is API Mocking?
//API Mocking is a technique used in software development to simulate the behavior of an API (Application Programming Interface) without actually connecting to the real API. This allows developers to test their applications and code against a controlled environment, ensuring that they can handle various scenarios and responses without relying on the availability or stability of the real API.

import { test, expect } from '@playwright/test';


test('API Mocking Test', async ({ page }) => {

    await page.route("https://demo.playwright.dev/api-mocking/api/v1/fruits",
        async route => {
            const json = [{ name: "Apple", color: "Red" }]
            await route.fulfill({ json })

        })

    await page.goto("https://demo.playwright.dev/api-mocking");

    await expect(page.locator("(//li[normalize-space()='Apple'])")).toHaveText("Apple");
});