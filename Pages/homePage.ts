/* //home page
//Every page will have 3 components
 //1)Locators,action Method,constructor */


import { Locator, Page } from "@playwright/test";
import '../hooks/CommonHooks'

export class homePage {

    private register: Locator;
    private login: Locator;
    private myAccount: Locator;
    page:Page;

    public constructor(page: Page) {

        this.register = page.locator('//a[text()="Register"]');
        this.login = page.locator('//a[text()="Login"]');
        this.myAccount = page.locator('//span[text()="My Account"]');
        this.page=page;
        
    }

    public async gotoMyAccount():Promise<void>{
        await this.page.goto(process.env.BASE_URL!);
        await this.myAccount.click();
    }

     public async gotoRegisterPage(): Promise<void>{
         await this.register.first().click();

     }

       public async gotoLoginPage(): Promise<void>{
         await this.login.first().click();

     }


}
    