import { test, expect } from '@playwright/test';

test('About meta is correct', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveTitle('Blog | Blue Engineering');
});
