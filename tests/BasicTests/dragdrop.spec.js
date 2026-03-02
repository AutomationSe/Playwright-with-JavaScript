import {test,expect} from "@playwright/test";

test("Drag and Drop Test", async({page})=>{

    await page.goto("https://drag-and-drop-tricks.webflow.io/");

    const drag = await page.locator('.draggable_fill').nth(2);
    const drop = await page.locator("//div[@class='quiz-option is-drop']");
    await drag.dragTo(drop);
    await page.waitForTimeout(5000);
    await expect(await page.locator('.success_text')).toContainText('correct');
})
