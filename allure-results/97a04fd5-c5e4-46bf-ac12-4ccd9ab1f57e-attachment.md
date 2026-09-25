# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice_pw.spec.ts >> Handling Prompt Alert
- Location: tests\practice_pw.spec.ts:35:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//p[@id="demo"]')
Expected: "Hello ! How are you today?"
Received: "Hello Abdul! How are you today?"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//p[@id="demo"]')
    14 × locator resolved to <p id="demo">Hello Abdul! How are you today?</p>
       - unexpected value "Hello Abdul! How are you today?"

```

```yaml
- paragraph: Hello Abdul! How are you today?
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test';
  2  | const baseURL="https://testautomationpractice.blogspot.com/";
  3  | 
  4  | test.skip("Handle Simple pop-up",async({page})=>{
  5  |     await page.goto(baseURL);
  6  | 
  7  |     page.on('dialog',async dialog=>{
  8  | 
  9  |         console.log(dialog.message());
  10 |         expect(dialog.message()).toBe("I am an alert box!");
  11 |         await dialog.accept();
  12 | 
  13 |     });
  14 | 
  15 |     await page.getByRole('button',{name:'Simple Alert'}).click();
  16 |     await page.pause();
  17 | });
  18 | 
  19 | test.skip("Handle Confirmation Alert!",async({page})=>{
  20 |     await page.goto(baseURL);
  21 | 
  22 |     page.on('dialog',async(dialog)=>{
  23 |         const message=dialog.message();
  24 |         console.log(message);
  25 |         expect.soft(message).toBe("Press a button!");
  26 | 
  27 |         await dialog.accept();
  28 | 
  29 |     });
  30 | 
  31 |     await page.getByRole("button",{name:'Confirmation Alert'}).click();
  32 |     await page.pause();
  33 | });
  34 | 
  35 | test("Handling Prompt Alert",async({page})=>{
  36 |     await page.goto(baseURL);
  37 | 
  38 |     page.on('dialog',async(dialog)=>{
  39 | 
  40 |         const pMessage=dialog.message();
  41 |         console.log(pMessage);
  42 |         expect(pMessage).toBe("Please enter your name:");
  43 |         await dialog.accept('Abdul');
  44 |     });
  45 | 
  46 |     await page.getByRole('button',{name:"Prompt Alert"}).click();
> 47 |     await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello ! How are you today?');
     |                                                   ^ Error: expect(locator).toHaveText(expected) failed
  48 |     await page.pause();
  49 | })
```