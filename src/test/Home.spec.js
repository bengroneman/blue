test('meta is correct', async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle('Blue Engineering | Home');
});

test('navigation is correct', async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle('Blue Engineering | Home');
}
