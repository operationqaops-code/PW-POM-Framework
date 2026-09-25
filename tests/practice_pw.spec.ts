import { test, expect } from '@playwright/test';
const baseURL = "https://testautomationpractice.blogspot.com/";

test.skip("Handle Simple pop-up", async ({ page }) => {
    await page.goto(baseURL);

    page.on('dialog', async dialog => {

        console.log(dialog.message());
        expect(dialog.message()).toBe("I am an alert box!");
        await dialog.accept();

    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.pause();
});

test.skip("Handle Confirmation Alert!", async ({ page }) => {
    await page.goto(baseURL);

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(message);
        expect.soft(message).toBe("Press a button!");

        await dialog.accept();

    });

    await page.getByRole("button", { name: 'Confirmation Alert' }).click();
    await page.pause();
});

test.skip("Handling Prompt Alert", async ({ page }) => {
    await page.goto(baseURL);

    page.on('dialog', async (dialog) => {

        const pMessage = dialog.message();
        console.log(pMessage);
        expect(pMessage).toBe("Please enter your name:");
        await dialog.accept('Abdul');
    });

    await page.getByRole('button', { name: "Prompt Alert" }).click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Abdul! How are you today?');
    await page.pause();
})

//Handling All  Dialogs by switch case

test.skip("Handling All the Dialog", async ({ page }) => {
    await page.goto(baseURL);

    page.on("dialog", async (dialog) => {

        switch (dialog.type()) {
            case 'alert': expect(dialog.message()).toBe("I am an alert box!");
                await dialog.accept();
                break;
            case 'confirm': expect(dialog.message()).toBe("Press a button!");
                await dialog.accept();
                break;
            case 'prompt': expect(dialog.message()).toBe("Please enter your name:");
                await dialog.accept('Abdul');
                break;

        }
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.getByRole("button", { name: 'Confirmation Alert' }).click();
    await page.getByRole('button', { name: "Prompt Alert" }).click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Abdul! How are you today?');
});

test.skip("Search and click on text", async ({ page }) => {
    await page.goto(baseURL);
    await page.locator('//input[@class="wikipedia-search-input"]').type("ind");
    await page.locator('//input[@class="wikipedia-search-button"]').click();
    const searchText = page.locator('//div[@class="wikipedia-search-results"]/div/a');
    await expect(searchText.first()).toBeVisible();
    //await page.getByRole('link', { name: 'India', exact: true }).click();
    let counts = await searchText.count();
    for (let i = 0; i < counts; i++) {

        let text = searchText.nth(i);
        let textValue = await text.textContent();

        if (textValue?.includes("Indonesia")) {
            await text.click();
            break;
        }
    }

    await page.pause();

});

//shadow DOM

test.skip("Handling Shadow DOM", async ({ page }) => {

    await page.goto(baseURL);
    await page.locator('#shadow_host input[type="text"]').fill('Abdul');
    await page.getByRole('link', { name: "Blog" }).nth(2).click();

    await page.pause();
});

//switch window Handling

test("Handling Switch Window",async({page})=>{

    await page.goto(baseURL);

    const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'New Tab' }).click()

    ]);
    await newTab.waitForLoadState();
    await newTab.getByRole('link',{name:"Online Training",exact:true}).click();
    await page.pause();
});