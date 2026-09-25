import { test, expect } from '@playwright/test';
import { loginPage } from '../Pages/loginPage';
import { homePage } from '../Pages/homePage';
import fs from 'fs';
import '../hooks/CommonHooks'

const credentials = JSON.parse(
    fs.readFileSync('./test-data/credentials.json', 'utf-8')
);


test("login Validation @priority @master", async ({ page }) => {
    const myHomePage = new homePage(page);
    await myHomePage.gotoMyAccount();
    await myHomePage.gotoLoginPage();


    
    const lpage = new loginPage(page);
    //await lpage.loginToPage(credentials.email,credentials.password);
    await lpage.loginToPage(process.env.APPUSERNAME!,process.env.PASSWORD!);
    //await page.waitForTimeout(10000);
    //await page.pause();
    const successMessage = await lpage.loginSuccessMessage();
    expect.soft(successMessage).toBeTruthy();



});

/* 
 "scripts": {
   "regression": "npx playwright test",
    "webTests": "npx playwright test --grep @Web --reporter=line,allure-playwright",
   "APITests": "npx playwright test --grep @API --reporter=line,allure-playwright",
   "CucumberRegression": "npx cucumber-js --tags @Regression --retry 1 --exit --format html:cucumber-report.html",
   "AzureRun": "npx playwright test --config=playwright.service.config.js --workers=4"
  },  */