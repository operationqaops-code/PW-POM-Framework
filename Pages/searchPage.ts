import { Locator, Page } from "@playwright/test";

export class searchPage {

    private searchItem: Locator;
    private searchBtn: Locator;
    private categories: Locator;
    private selectCategories: Locator;
    private search: Locator;
    private getExpectedItem: Locator;
    private isSuccessMessage: Locator;
    private shoppingCardBtn:Locator;
    private shoppingCart:Locator;

    public constructor(page: Page) {
        this.searchItem = page.getByRole('textbox', { name: 'Search' });
        this.searchBtn = page.locator('//button[@class="btn btn-default btn-lg"]');
        this.categories = page.locator('//select[@name="category_id"]');
        this.selectCategories = page.locator('[name="category_id"]');
        this.search = page.locator('//input[@id="button-search"]');
        this.getExpectedItem = page
            .locator('//div[contains(@class, "product-layout")]')
            .filter({
                has: page.getByText('MacBook', { exact: true })
            });
        this.isSuccessMessage = page.locator('//div[@class="alert alert-success alert-dismissible"]');
        this.shoppingCardBtn=page.locator('//span[text()="Shopping Cart"]');
        this.shoppingCart=page.getByRole('link',{name:'Shopping Cart',exact:true});



    }

    public async searchProduct(): Promise<void> {
        await this.searchItem.fill("Mac");
        await this.searchBtn.click();
        await this.categories.click();
        await this.selectCategories.selectOption({
            label: "Laptops & Notebooks"
        });
        await this.search.click();

        if (await this.getExpectedItem.isVisible()) {

            console.log("MacBook is visible");

            await this.getExpectedItem
                .getByRole('button', { name: 'Add to Cart' })
                .click();

        } else {

            console.log("MacBook is not visible");
        }

    }

    public async itemAddedToCart(): Promise<any> {
        return await this.isSuccessMessage.textContent();
    }

    public async checkoutProduct(){
        await this.shoppingCardBtn.click();

    }

    public async isCheckoutSuccess(){
        return await this.shoppingCart.textContent();
    }

} 