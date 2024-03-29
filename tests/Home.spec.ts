//@ts-ignore
import { navigation } from '../src/data/navigation.ts';
import { test, expect } from '@playwright/test';


test('meta is correct', async ({ page }) => {
    await page.goto("/");
    await page.locator('#Home').click();

    await expect(page).toHaveTitle('Blue Engineering | Home');
});

test('navigation is correct', async ({ page }) => {
    await page.goto("/");

    for (const item of navigation) {
        const element = await page.locator(`#${item['title']}`)
        await expect(element).toBeVisible();
    }
});

test('footer navigation is correct', async ({ page }) => {
    await page.goto("/");

    for (const item of navigation) {
        const element = await page.locator(`#footer-${item['title']}`)
        await expect(element).toBeVisible();
    }
});
