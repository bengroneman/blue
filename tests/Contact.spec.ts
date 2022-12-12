import { test, expect } from '@playwright/test';

test('contact meta is correct', async ({ page }) => {
    await page.goto("/");

    await page.locator('#Contact').click()

    await expect(page).toHaveTitle('Contact | Blue Engineering');
});

test('able to fill out form', async ({page}) => {
    await page.goto("/contact");

    await page.locator("input[name='full-name']").type("Ben Groneman")
    await page.locator("input[name='email']").type("clio@clippy.org")
    await page.locator("input[name='phone']").type("1-111-111-1111")
    await page.locator("textarea[name='message']").type("A placeholder text as this is merely a test of the system")

    await page.locator('#submit').click();
});
