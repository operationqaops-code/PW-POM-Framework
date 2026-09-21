import { test, expect } from '../fixtures/loginFixture';
import fs from 'fs';
import { Dataprovider1 } from '../utils/readData';

const csvPath = "test-data/login-data.csv";
const testData = Dataprovider1.getTestDataFromCsv(csvPath);

//Data Driven Testing

for (const data of testData) {
    test(`Data Driven Test: ${data.testName}`, async ({ page, homepage, loginpage }) => {
        await homepage.gotoMyAccount();
        await homepage.gotoLoginPage();

        await loginpage.loginToPage(
            data.email,
            data.password
        );
        await page.waitForLoadState('networkidle');
        if (data.expected.toLowerCase() === 'success') {
            const successMessage = await loginpage.loginSuccessMessage()
            expect(successMessage).toBeTruthy()

        } else {

            const errorMessage = await loginpage.errorvalidation();
            expect(errorMessage).toBeTruthy();
        }
    });

}