import { test, expect } from '@playwright/test';

test('About meta is correct', async ({ page }) => {
    await page.goto('/resume');
    await expect(page).toHaveTitle('Resume | Blue Engineering');
});
