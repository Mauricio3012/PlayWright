import {expect, test} from "@playwright/test";

test('the user login with success', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await expect(await page.title()).toBe('Swag Labs');

    await page.locator(`[data-test="username"]`).fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

    //await page.pause();

    const productTitle = await page.locator('[data-test="title"]');
    await expect(productTitle).toHaveText('Products');

})