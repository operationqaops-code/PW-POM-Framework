# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice_pw.spec.ts >> Handle pop-up
- Location: tests\practice_pw.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test';
  2  | 
  3  | test("Handle pop-up",async({page})=>{
> 4  |     await page.goto("https://testautomationpractice.blogspot.com/");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | 
  6  |     page.on('dialog',async dialog=>{
  7  | 
  8  |         console.log(dialog.message());
  9  |         expect(dialog.message()).toBe("I am an alert box!");
  10 |         await dialog.accept();
  11 | 
  12 |     });
  13 | 
  14 |     await page.getByRole('button',{name:'Simple Alert'}).click();
  15 |     await page.pause();
  16 | });
```