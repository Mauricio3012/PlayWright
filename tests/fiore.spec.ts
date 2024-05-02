import {expect, test} from "@playwright/test";

test('create ME21N document', async ({page}) => {
    test.setTimeout(360000);
    await page.goto('http://vmacns4sx5:8001/sap/bc/ui2/flp');

    await page.getByRole('button', { name: 'Advanced' }).click();
    await page.getByRole('link', { name: 'Proceed to vmacns4sx5 (unsafe)' }).click();

    await expect(await page.title()).toBe('Logon');

    await page.locator(`[name="sap-user"]`).fill('cpinheiro');
    await page.locator('[name="sap-password"]').fill('Accenture@2024');
    await page.locator('[id="LOGIN_LINK"]').click();

    const btnSearch =  await page.locator('[id="sf"]');

    await btnSearch.isVisible();
    await btnSearch.click();

    const inputSearch =  await page.locator('[name="search"]'); 

    await inputSearch.isVisible();

    await inputSearch.click();

    await inputSearch.fill('ME21N');

    await inputSearch.waitFor();

    await page.getByText('Create Purchase Order', { exact: true }).click();

    //await page.pause();

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByLabel('Supplier').fill('101');
    await page.keyboard.press('Enter');

    //Preenche Purch. Org
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByLabel('Purch. Org.').fill('BR08');
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByLabel('Purch. Group', { exact: true }).fill('004');
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByLabel('Company Code', { exact: true }).fill('BR02');
    await page.keyboard.press('Enter');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(1).click();

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(1).fill('774');
    
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(1).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(2).click();

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(2).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(3).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(3).fill('10');
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(3).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(4).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(4).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(5).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(5).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(6).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(6).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(7).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(7).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(8).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(8).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(9).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(9).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(10).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(10).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(11).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(11).press('Tab');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(12).click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(12).fill('BR08');

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(12).press('Enter');
   
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('gridcell', { name: '  Empty    Empty   ' }).getByRole('textbox').nth(12).click({ timeout: 20000 });
    //await page.pause();

    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('button', { name: 'Menu' }).click({ timeout: 10000 });
    
    await page.keyboard.press('Control+S');
    //await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('button', { name: 'Menu' }).press('ArrowRight');

    //await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByLabel('Save (Ctrl+S)').click();
    await page.frameLocator('iframe[name="application-PurchaseOrder-create-iframe"]').getByRole('button', { name: 'Save', exact: true }).click();
   
    //Validar mensagem PO criada com sucesso
    const mensagem = await page.locator('//*[@id="wnd[0]/sbar_msg-txt"]');
    await expect(mensagem).toBeHidden();
    //await expect(mensagem).toHaveText('Standard PO created under the number',  { timeout: 20000 });
})