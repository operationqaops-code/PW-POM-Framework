import fs from 'fs';
import { searchPage } from '../Pages/searchPage';
import { test, expect } from '../fixtures/loginFixture';

const credentials = JSON.parse(
    fs.readFileSync('./test-data/credentials.json', 'utf-8')
);


test("searh  Item", async ({ page,homepage, loginpage }) => {
    await homepage.gotoMyAccount();
    await homepage.gotoLoginPage();

    await loginpage.loginToPage(credentials.email, credentials.password);
    await page.waitForTimeout(5000);

    const searchpage = new searchPage(page);
    await searchpage.searchProduct();
    const successMessage=(await searchpage.itemAddedToCart()).trim();

    expect(successMessage).toContain("Success: You have added MacBook to your shopping cart!");
    await searchpage.checkoutProduct();
    const checkoutSuccess=await searchpage.isCheckoutSuccess();
    expect(checkoutSuccess).toContain("Shopping Cart");


    await page.waitForTimeout(5000);
    await page.pause();




})