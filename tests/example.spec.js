// @ts-check
const { test, expect } = require('@playwright/test');

test('It doesnt crash on input[type=color] click', async ({ page }) => {
  await page.setContent('<input type="color">');
  const input = page.locator('input');

  await expect(input).toBeVisible();
  await input.click();
  await expect(input).toBeVisible();
});

