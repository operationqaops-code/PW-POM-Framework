import { test, expect } from '@playwright/test';
import { registrationPage } from '../Pages/registrationPage';
import { homePage } from '../Pages/homePage';

test("@sanity Register to the Page", async ({ page }) => {

    const myHomePage=new homePage(page);
    await myHomePage.gotoMyAccount();
    await myHomePage.gotoRegisterPage();
    const regPage = new registrationPage(page);
    await regPage.registerToBuyProduct();
    //await page.waitForTimeout(10000);
    const succMessage=await regPage.getSuccessMessage();
    expect(succMessage).toBe('Your Account Has Been Created!');

});