# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Handling mix of pop up widow
- Location: tests\practice.spec.ts:67:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Simple Alert' })

```

# Test source

```ts
  1   | import { test, expect, request } from '@playwright/test';
  2   | 
  3   | test.skip('single file upload', async ({ page }) => {
  4   | 
  5   |     await page.goto('https://testautomationpractice.blogspot.com/')
  6   | 
  7   |     await page.locator('#singleFileInput').setInputFiles('uploads/file1.txt')
  8   | 
  9   |     await page.locator('//button[text()="Upload Single File"]').click()
  10  | 
  11  |     let msg = await page.locator('#singleFileStatus').textContent()
  12  |     expect(msg).toContain('file1.txt')
  13  | 
  14  |     await page.waitForTimeout(5000)
  15  | 
  16  | });
  17  | 
  18  | test.skip("Handling Alert & Popup", async ({ page }) => {
  19  | 
  20  |     await page.goto("https://testautomationpractice.blogspot.com/");
  21  | 
  22  | 
  23  |     page.on('dialog', async dialog => {
  24  | 
  25  |         console.log(dialog.message());
  26  |         expect(dialog.message()).toBe("I am an alert box!");
  27  |         await dialog.accept();
  28  |     });
  29  | 
  30  |     await page.getByRole('button', { name: 'Simple Alert' }).click();
  31  | 
  32  | });
  33  | 
  34  | test.skip("Handling Confirmation Alert", async ({ page }) => {
  35  |     await page.goto("https://testautomationpractice.blogspot.com/");
  36  |     page.on('dialog', async dialog => {
  37  |         console.log(dialog.message());
  38  |         expect(dialog.message()).toBe("Press a button!");
  39  |         await dialog.accept();
  40  |     });
  41  | 
  42  |     await page.locator("#confirmBtn").first().click();
  43  |     const confirmMessage = page.getByText("You pressed OK!");
  44  |     expect(confirmMessage).toBeVisible();
  45  | 
  46  | });
  47  | 
  48  | test.skip("Handling Prompt Alert ", async ({ page }) => {
  49  |     await page.goto("https://testautomationpractice.blogspot.com/");
  50  |     page.on('dialog', async dialog => {
  51  |         console.log(dialog.message());
  52  |         expect(dialog.message()).toBe("Please enter your name:");
  53  |         await dialog.accept("Abdul");
  54  | 
  55  | 
  56  |     });
  57  | 
  58  |     await page.getByRole('button', { name: 'Prompt Alert' }).click();
  59  |     const promptAlertMessage = page.locator("#demo");
  60  |     expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");
  61  | 
  62  | 
  63  | });
  64  | 
  65  | //Handling all the popup by utilising a switch case statement
  66  | 
  67  | test("Handling mix of pop up widow", async ({ page }) => {
  68  |     page.on('dialog', async dialog => {
  69  | 
  70  |         switch (dialog.type()) {
  71  |             case 'alert': expect(dialog.message()).toBe("I am an alert box!");
  72  |                 dialog.accept();
  73  |                 break;
  74  |             case 'confirm': expect(dialog.message()).toBe("Press a button!");
  75  |                 dialog.accept();
  76  |                 break;
  77  | 
  78  |             case 'prompt': expect(dialog.message()).toBe("Please enter your name:");
  79  |                 dialog.accept("Abdul");
  80  |                 break;
  81  |         }
  82  | 
  83  |     });
  84  | 
> 85  |     await page.getByRole('button', { name: 'Simple Alert' }).click();
      |                                                              ^ Error: locator.click: Target page, context or browser has been closed
  86  |     await page.locator("#confirmBtn").first().click();
  87  |     const confirmMessage = page.getByText("You pressed OK!");
  88  |     expect(confirmMessage).toBeVisible();
  89  | 
  90  |     await page.getByRole('button', { name: 'Prompt Alert' }).click();
  91  |     const promptAlertMessage = page.locator("#demo");
  92  |     expect(promptAlertMessage).toHaveText("Hello Abdul! How are you today?");
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  | });
  99  | 
  100 | 
```