import { Locator, Page } from "@playwright/test";
import { dataProvider } from "../utils/dataProvider";
import fs from 'fs';
export class registrationPage {

    private firstName: Locator;
    private lastName: Locator;
    private userEmail: Locator;
    private phoneNumber: Locator;
    private password: Locator;
    private confirmPassword: Locator;
    private subscribe: Locator;
    private cb: Locator;
    private continueToRegister: Locator;
    private registrationSuccessMessage: Locator;

    public constructor(page: Page) {
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.userEmail = page.getByRole('textbox', { name: 'E-Mail' });
        this.phoneNumber = page.getByRole('textbox', { name: 'Telephone' });
        this.password = page.locator('#input-password');
        this.confirmPassword = page.locator('#input-confirm');
        this.subscribe = page.getByRole('radio', { name: 'No' });
        this.cb = page.locator('//input[@type="checkbox"]')
        this.continueToRegister = page.getByRole('button', { name: 'Continue' });
        this.registrationSuccessMessage = page.locator('#content h1');

    }

    public async registerToBuyProduct(): Promise<{
        email: string;
        password: string;
    }> {
        const password = dataProvider.getPassword();
        console.log(password);
        const email = dataProvider.getEmail();
        console.log(email);
        await this.firstName.fill(dataProvider.getFirstName());
        await this.lastName.fill(dataProvider.getLastName());
        await this.userEmail.fill(email);
        await this.phoneNumber.fill(dataProvider.getPhoneNumber());
        await this.password.type(password);
        await this.confirmPassword.type(password);
        await this.subscribe.click();
        await this.cb.check();
        await this.continueToRegister.click();
         // Save credentials to JSON
    const credentials = {
        email: email,
        password: password
    };

    fs.writeFileSync(
        'test-data/credentials.json',
        JSON.stringify(credentials, null, 2)
    );

    return { email, password };
      

    }

    public async getSuccessMessage(): Promise<string | null> {

        return this.registrationSuccessMessage.textContent();
    }
}