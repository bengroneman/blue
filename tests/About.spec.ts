import { test, expect } from '@playwright/test';

test('About meta is correct', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveTitle('About | Blue Engineering');
});
