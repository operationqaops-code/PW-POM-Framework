import { Locator, Page } from "@playwright/test";

export class loginPage {

    private email: Locator;
    private password: Locator;
    private login: Locator;
    private loginSuccess: Locator;
    private loginerror:Locator;

    public constructor(page: Page) {
        this.email = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.login = page.getByRole('button', { name: 'Login' });
        this.loginSuccess = page.locator('h2:has-text("My Account")')
        this.loginerror = page.locator('div.alert');

    }

    public async loginToPage(email:string,password:string): Promise < void > {

        await this.email.fill(email);
        await this.password.fill(password);
        await this.login.click();

    }

      public async errorvalidation(): Promise<boolean> {

        return await this.loginerror.isVisible();
    }


    public async loginSuccessMessage(): Promise < boolean > {
    await this.loginSuccess.first().highlight();
    return await this.loginSuccess.first().isVisible();
}

}