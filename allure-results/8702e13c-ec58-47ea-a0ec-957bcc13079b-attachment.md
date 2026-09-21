# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: file-upload.spec.ts >> Handling Alert & Popup
- Location: tests\file-upload.spec.ts:18:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "I am an alert box"
Received: "I am an alert box!"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Simple Alert' })
    - locator resolved to <button id="alertBtn" onclick="myFunctionAlert()">Simple Alert</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect, request } from '@playwright/test';
  2  |  
  3  | test.skip('single file upload', async ({page}) => {
  4  | 
  5  | await page.goto('https://testautomationpractice.blogspot.com/')
  6  | 
  7  | await page.locator('#singleFileInput').setInputFiles('uploads/file1.txt')
  8  | 
  9  | await page.locator('//button[text()="Upload Single File"]').click()
  10 | 
  11 | let msg=await page.locator('#singleFileStatus').textContent()
  12 | expect(msg).toContain('file1.txt')
  13 | 
  14 | await page.waitForTimeout(5000)
  15 | 
  16 | });
  17 | 
  18 | test("Handling Alert & Popup",async({page})=>{
  19 | 
  20 | await page.goto("https://testautomationpractice.blogspot.com/");
  21 | 
  22 | 
  23 | page.once('dialog',async dialog=>{
  24 | 
  25 |     console.log(dialog.message());
  26 |     expect(dialog.message()).toBe("I am an alert box");
  27 |      //await page.pause();
  28 |     await dialog.accept();
  29 | 
  30 | });
  31 | 
> 32 | await page.getByRole('button',{name:'Simple Alert'}).click();
     |                                                      ^ Error: locator.click: Test ended.
  33 | 
  34 | //await page.pause();
  35 | 
  36 | });
  37 | 
```