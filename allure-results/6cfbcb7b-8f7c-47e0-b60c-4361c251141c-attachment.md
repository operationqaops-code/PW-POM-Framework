# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Switch window Handling
- Location: tests\practice.spec.ts:106:1

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'New Tab' })

```

# Test source

```ts
  13  |     let msg = await page.locator('#singleFileStatus').textContent()
  14  |     expect(msg).toContain('file1.txt')
  15  | 
  16  |     await page.waitForTimeout(5000)
  17  | 
  18  | });
  19  | 
  20  | //*******Handling Pop up Alert through Playwright page.on method*********
  21  | 
  22  | 
  23  | test.skip("Handling Alert & Popup", async ({ page }) => {
  24  | 
  25  |     await page.goto("https://testautomationpractice.blogspot.com/");
  26  | 
  27  | 
  28  |     page.on('dialog', async dialog => {
  29  | 
  30  |         console.log(dialog.message());
  31  |         expect(dialog.message()).toBe("I am an alert box!");
  32  |         await dialog.accept();
  33  |     });
  34  | 
  35  |     await page.getByRole('button', { name: 'Simple Alert' }).click();
  36  | 
  37  | });
  38  | 
  39  | test.skip("Handling Confirmation Alert", async ({ page }) => {
  40  |     await page.goto("https://testautomationpractice.blogspot.com/");
  41  |     page.on('dialog', async dialog => {
  42  |         console.log(dialog.message());
  43  |         expect(dialog.message()).toBe("Press a button!");
  44  |         await dialog.accept();
  45  |     });
  46  | 
  47  |     await page.locator("#confirmBtn").first().click();
  48  |     const confirmMessage = page.getByText("You pressed OK!");
  49  |     expect(confirmMessage).toBeVisible();
  50  | 
  51  | });
  52  | 
  53  | test.skip("Handling Prompt Alert ", async ({ page }) => {
  54  |     await page.goto("https://testautomationpractice.blogspot.com/");
  55  |     page.on('dialog', async dialog => {
  56  |         console.log(dialog.message());
  57  |         expect(dialog.message()).toBe("Please enter your name:");
  58  |         await dialog.accept("Abdul");
  59  | 
  60  | 
  61  |     });
  62  | 
  63  |     await page.getByRole('button', { name: 'Prompt Alert' }).click();
  64  |     const promptAlertMessage = page.locator("#demo");
  65  |     expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");
  66  | 
  67  | 
  68  | });
  69  | 
  70  | //Handling all the popup by utilising a switch case statement
  71  | 
  72  | test.skip("Handling mix of pop up widow", async ({ page }) => {
  73  | 
  74  |     await page.goto("https://testautomationpractice.blogspot.com/");
  75  |     page.on('dialog', async dialog => {
  76  | 
  77  |         switch (dialog.type()) {
  78  |             case 'alert': expect(dialog.message()).toBe("I am an alert box!");
  79  |                 dialog.accept();
  80  |                 break;
  81  |             case 'confirm': expect(dialog.message()).toBe("Press a button!");
  82  |                 dialog.accept();
  83  |                 break;
  84  | 
  85  |             case 'prompt': expect(dialog.message()).toBe("Please enter your name:");
  86  |                 dialog.accept("Abdul");
  87  |                 break;
  88  |         }
  89  | 
  90  |     });
  91  | 
  92  |     await page.getByRole('button', { name: 'Simple Alert' }).click();
  93  |     await page.locator("#confirmBtn").first().click();
  94  |     const confirmMessage = page.getByText("You pressed OK!");
  95  |     expect(confirmMessage).toBeVisible();
  96  | 
  97  |     await page.getByRole('button', { name: 'Prompt Alert' }).click();
  98  |     const promptAlertMessage = page.locator("#demo");
  99  |     expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");
  100 | 
  101 | });
  102 | 
  103 | 
  104 | //***********Handling switch window functionality throgh Promise.all Method*************
  105 | 
  106 | test("Switch window Handling",async({page})=>{
  107 | 
  108 |     await page.goto("https://testautomationpractice.blogspot.com/");
  109 | 
  110 |     const[newTab]=await Promise.all([
  111 | 
  112 |         page.waitForEvent('popup'),
> 113 |         await page.getByRole('link', { name: 'New Tab' }).click()
      |                                                           ^ Error: locator.click: Target page, context or browser has been closed
  114 |     ]);
  115 | 
  116 |     await newTab.waitForLoadState();
  117 | 
  118 | });
  119 | 
  120 | 
```