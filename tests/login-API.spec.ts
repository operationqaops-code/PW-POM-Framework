
import { searchPage } from '../Pages/searchPage';
import { test, expect } from '../API/login-API';


test("@sanity searh  Item", async ({ page, authenticatedContext }) => {

    const state = await authenticatedContext.storageState();
    //console.log(state);
    await page.context().addCookies(state.cookies);
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
    const searchpage = new searchPage(page);
    await searchpage.searchProduct();
    const successMessage = (await searchpage.itemAddedToCart()).trim();

    expect(successMessage).toContain("Success: You have added MacBook to your shopping cart!");
    await searchpage.checkoutProduct();
    const checkoutSuccess = await searchpage.isCheckoutSuccess();
    expect(checkoutSuccess).toContain("Shopping Cart");

});