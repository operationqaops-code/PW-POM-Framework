import { test, expect, Locator, FrameLocator, chromium } from '@playwright/test';
import { text } from 'node:stream/consumers';

//***************Handling Single File Upload through playwright setInputFiles Method****************

test.skip('single file upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#singleFileInput').setInputFiles('uploads/file1.txt')

    await page.locator('//button[text()="Upload Single File"]').click()

    let msg = await page.locator('#singleFileStatus').textContent()
    expect(msg).toContain('file1.txt')

    await page.waitForTimeout(5000)

});

//*******Handling Pop up Alert through Playwright page.on method*********


test.skip("Handling Alert & Popup", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


    page.on('dialog', async dialog => {

        console.log(dialog.message());
        expect(dialog.message()).toBe("I am an alert box!");
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();

});

test.skip("Handling Confirmation Alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe("Press a button!");
        await dialog.accept();
    });

    await page.locator("#confirmBtn").first().click();
    const confirmMessage = page.getByText("You pressed OK!");
    expect(confirmMessage).toBeVisible();

});

test.skip("Handling Prompt Alert ", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe("Please enter your name:");
        await dialog.accept("Abdul");


    });

    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    const promptAlertMessage = page.locator("#demo");
    expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");


});

//Handling all the popup by utilising a switch case statement

test.skip("Handling mix of pop up widow", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {

        switch (dialog.type()) {
            case 'alert': expect(dialog.message()).toBe("I am an alert box!");
                dialog.accept();
                break;
            case 'confirm': expect(dialog.message()).toBe("Press a button!");
                dialog.accept();
                break;

            case 'prompt': expect(dialog.message()).toBe("Please enter your name:");
                dialog.accept("Abdul");
                break;
        }

    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.locator("#confirmBtn").first().click();
    const confirmMessage = page.getByText("You pressed OK!");
    expect(confirmMessage).toBeVisible();

    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    const promptAlertMessage = page.locator("#demo");
    expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");

});


//***********Handling switch window functionality throgh Promise.all Method*************

test.skip("Switch window Handling", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const [newTab] = await Promise.all([

        page.waitForEvent('popup'),
        await page.getByRole('button', { name: 'New Tab' }).click()
    ]);

    await newTab.waitForLoadState();
    await newTab.getByRole('link', { name: 'Online Training' }).click();
    await page.pause();

});

//*********Handling Mouse Actions(Mouse Hover)**********

test.skip("Handling Mouse Hover Over the Page", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const MouseLocator: Locator = page.getByRole('button', { name: 'Point Me' });
    await MouseLocator.hover();
    await page.getByRole('link', { name: 'Mobiles' }).click();
    await page.pause();



});

//**********Handling Mouse Double click and verify the text copied from Filed1 and paste to Field2**********

test.skip("Handling Mouse Double Click Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByRole('button', { name: 'Copy Text' }).dblclick();
    const text1 = await page.locator("#field1").inputValue();
    const text2 = await page.locator("#field2").inputValue();
    expect(text2).toBe(text1);

});

//********Handle Drag and Drop Element*************

test.skip("Handle Drag ANd Drop", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const dropped=await page.locator("#draggable").first().dragTo(page.locator("#droppable").first());
    const draggable = page.locator("#draggable").first();
    const droppable = page.locator("#droppable").first();
    await draggable.dragTo(droppable);
    await expect(droppable).toContainText("Dropped!");


});

//*************Handle Slider****************

test.skip("Handle Slider", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const slider = page.locator("#slider-range").first();
    const handles = page.locator('.ui-slider-handle');
    const firstHandle = handles.nth(0);
    const secondHandle = handles.nth(1);

    await firstHandle.dragTo(secondHandle);
});

//*************Data Entry Form *************


test.skip("Fill the Form", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByRole('textbox', { name: 'Enter Name' }).fill("Abdul");
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill("abc@123");
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill("637647326");
    await page.getByRole('textbox', { name: 'Address:' }).fill("Kolkata");
    await page.locator('//input[@id="male"]').check();

    let days = ['Sunday', 'Monday', 'TuesDay', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getAllLocator = days.map(a => page.getByLabel(a));
    for (const checkbox of getAllLocator.slice(1, 4)) {
        await checkbox.check();
    }

    await page.locator('#country').selectOption("India");
    await page.locator('#colors').selectOption("Red");
    await page.locator('#animals').selectOption("Lion");

    //date Picker
    await page.locator("#datepicker").click();
    const expectedMonth = "December";
    const expectedYear = "2020";
    const expectedDay = "25";
    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();


        if (currentMonth === expectedMonth &&
            currentYear === expectedYear) {
            break;

        }

        if (Number(currentYear) < Number(expectedYear)) {

            await page.locator(".ui-datepicker-next").click();

        } else if (Number(currentYear) > Number(expectedYear)) {

            await page.locator(".ui-datepicker-prev").click();

        } else {

            // Same year → compare months
            const months = [
                "January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"
            ];

            const currentMonthIndex = months.indexOf(currentMonth!);
            const expectedMonthIndex = months.indexOf(expectedMonth);

            if (currentMonthIndex < expectedMonthIndex) {
                await page.locator(".ui-datepicker-next").click();
            } else {
                await page.locator(".ui-datepicker-prev").click();
            }
        }
    }

    await page.locator('.ui-datepicker-calendar td').filter({ hasText: expectedDay }).click();
    await page.pause();
});


test.skip("Handling Static Web Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('//table[@name="BookTable"]');
    const row = table.locator('tbody tr')
    console.log(await row.count());

    const column = await table.locator('tbody tr th').count();
    console.log(column);

    for (let i = 0; i <= await row.count(); i++) {

        const rowelements: string[] = await row.nth(i).locator('td').allTextContents();
        console.log(rowelements);
        if (rowelements.includes("Selenium")) {
            console.log("selenium present in the table");

        }

    }
});

//*************Handling Pagination Web table***************

//select laptop from the table
test.skip("Handle Pagination Web Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator("#productTable");
    const rows = table.locator('tbody tr');
    const Pages: Locator = page.locator('#pagination a');

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const rowelements = await row.locator("td").allTextContents();
        if (rowelements.includes("Soundbar")) {
            await row.locator('//input[@type="checkbox"]').check();
            break;
        }
        await Pages.nth(i + 1).click();
        await expect(rows.first()).toBeVisible();
    }

    await page.pause();
});


//************Handle IFrame***************
test.skip("Handle iFrame", async ({ page }) => {
    await page.goto("https://selectorshub.com/iframe-scenario/");
    await page.waitForTimeout(10000);
    const frame1 = page.frameLocator("iframe#pact1").first();
    await frame1.getByPlaceholder("First Crush").fill('Abdul');
    await page.pause();
})

test.skip("handle the ui with test", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.getByRole('combobox', { name: 'Search' }).fill("Test");
    await page.locator(`//input[@value="Google Search"]`).nth(0).click();
    await page.locator(`//h3[starts-with(text(),"Test")]`).first().click();

    await page.pause();


});

//how do you handle shadow dom in playwright
// Playwright will do auto piercing of shadom dom element, we will commonly use css slector to do perform this task
// Xpath is not supported here

//Xpath is not supported because xpath works only within regular DOM structure/tree, it cannot access the
//Shadom dom boundary

//(playwright will consider shadow dom like a normal element)
/* Playwright provides built-in support for Shadow DOM. Its locators can automatically pierce open Shadow DOM boundaries, 
so I generally don't need to manually access shadowRoot. I can use regular locators such as locator(), getByRole(), 
or getByText() to interact with elements inside an open Shadow DOM. For nested Shadow DOMs, I can chain locators. 
If the Shadow DOM is inside an iframe, I first use frameLocator() and then locate the Shadow DOM element within that frame.
 However, a closed Shadow DOM cannot normally be accessed using standard Playwright locators, 
 so I would work with the development team to expose appropriate test hooks or use another supported test interface."

Easy way to remember:
Shadow DOM
│
├── Shadow Host
│      └── Custom element
│
├── Shadow Root
│      ├── Open
│      └── Closed
│
├── Shadow Tree
│      └── Internal DOM
│
└── Shadow Elements
       ├── input
       ├── button
       └── div

Key Playwright rule:
Open Shadow DOM → Playwright locators can pierce it.
Closed Shadow DOM → standard Playwright locators cannot bypass it. */

/* test("Handle shadow dom",async({page})=>{
    await page.goto("https://selectorshub.com/shadow-dom-in-iframe/");
    const sd:FrameLocator=page.frameLocator('iframe#pact').first();
   // sd.locator('#tea').first().fill("Yes");
    await page.locator("#training").first().fill("No");

}); */

//QA Automation Engineer | 4.7 Years | Immediate Joiner | Playwright | JavaScript | TypeScript | Cucumber BDD | POM |Git | SIP | Diameter | SIPp | JMeter | Jenkins | Wireshark | Seagul | Functional Testing | SoftBank & TPx ,Diameter Project Experience.

//Handle dropDowns
/* test("Handle dropdowns menu", async ({ }) => {

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto("https://orangehrm.com/contact-sales");
    await page.locator('//input[@name="FullName"]').fill("Abdul");
    await page.locator('//input[@name="Email"]').fill("abc123@gmail.com");
    await page.getByPlaceholder('Phone Number*').type('746784385643');
    await page.locator('//select[@name="Country"]').selectOption({ value: 'India' });
    await page.getByPlaceholder("Company Name").fill("hope.com");
    await page.locator('//input[@name="JobTitle"]').fill("Automation Engineer");
    await page.locator('//select[@name="NoOfEmployees"]').selectOption({ value: '11 - 50' });
    await page.locator('//textarea[@name="Comment"]').fill("Sales Pages");
    //await page.locator('#recaptcha-anchor').click();
    await page.getByRole('button', { name: 'Contact Sales' }).first().click();

    await page.pause();

}); */

//CSS Selector example

test.skip('CSS Selector',async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
     //css selector
    //1) with id - tagname#idvalue
    //2) with class - tagname.classvalue
    //3) with other attribute and value - tagname[attribute='value']
    await page.locator('input#input-firstname').fill("Abdul");
    await page.locator('input#input-lastname').fill("Alom");
    await page.locator('input#input-email').fill("abc-123@gmail.com");
    await page.locator('input#input-telephone').fill("7867676888");
    await page.locator('input#input-password').fill("abc@123");
    await page.locator('input#input-confirm').fill("abc@123");
    await page.locator('input[name="newsletter"][value="0"]').click();
    await page.locator('input[type="checkbox"]').click();
    await page.locator('input[type="submit"]').click();

    await page.pause();

});

//xpath types - 1) absolute xpath 2) Relative xpath

//absolute xpath - /html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/fieldset[1]/div[2]/div[1]/ [1]
//relative xpath - //tagname[@attribute='value']

test("Handling Locators with Relative X-Path",async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.locator('//input[@name="firstname"]').fill("Abdul");
    await page.locator('//input[@id="input-lastname"]').fill("Wadud");
    await page.locator('//input[@placeholder="E-Mail"]').fill("xyz123@gmail.com");
    await page.locator('//input[@placeholder="Telephone"]').fill("9799799900");
    await page.locator('//input[@id="input-password"]').fill("xyz@123");
    await page.locator('//input[@placeholder="Password Confirm"]').fill("xyz@123");
    await page.locator('//input[@type="radio" and @name="newsletter" and @value="0"]').click();
    await page.locator('//input[@type="checkbox"]').click();
    await page.locator('//input[@type="submit"]').click();

    await page.pause();


});