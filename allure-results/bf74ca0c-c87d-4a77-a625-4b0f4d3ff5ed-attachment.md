# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Handle iFrame
- Location: tests\practice.spec.ts:295:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://selectorshub.com/iframe-scenario/", waiting until "load"

```

# Test source

```ts
  196 |     await page.locator('#animals').selectOption("Lion");
  197 | 
  198 |     //date Picker
  199 |     await page.locator("#datepicker").click();
  200 |     const expectedMonth = "December";
  201 |     const expectedYear = "2020";
  202 |     const expectedDay = "25";
  203 |     while (true) {
  204 |         const currentMonth = await page.locator(".ui-datepicker-month").textContent();
  205 |         const currentYear = await page.locator('.ui-datepicker-year').textContent();
  206 | 
  207 | 
  208 |         if (currentMonth === expectedMonth &&
  209 |             currentYear === expectedYear) {
  210 |             break;
  211 | 
  212 |         }
  213 | 
  214 |         if (Number(currentYear) < Number(expectedYear)) {
  215 | 
  216 |             await page.locator(".ui-datepicker-next").click();
  217 | 
  218 |         } else if (Number(currentYear) > Number(expectedYear)) {
  219 | 
  220 |             await page.locator(".ui-datepicker-prev").click();
  221 | 
  222 |         } else {
  223 | 
  224 |             // Same year → compare months
  225 |             const months = [
  226 |                 "January", "February", "March", "April",
  227 |                 "May", "June", "July", "August",
  228 |                 "September", "October", "November", "December"
  229 |             ];
  230 | 
  231 |             const currentMonthIndex = months.indexOf(currentMonth!);
  232 |             const expectedMonthIndex = months.indexOf(expectedMonth);
  233 | 
  234 |             if (currentMonthIndex < expectedMonthIndex) {
  235 |                 await page.locator(".ui-datepicker-next").click();
  236 |             } else {
  237 |                 await page.locator(".ui-datepicker-prev").click();
  238 |             }
  239 |         }
  240 |     }
  241 | 
  242 |     await page.locator('.ui-datepicker-calendar td').filter({ hasText: expectedDay }).click();
  243 |     await page.pause();
  244 | });
  245 | 
  246 | 
  247 | test.skip("Handling Static Web Table", async ({ page }) => {
  248 | 
  249 |     await page.goto("https://testautomationpractice.blogspot.com/");
  250 |     const table = page.locator('//table[@name="BookTable"]');
  251 |     const row = table.locator('tbody tr')
  252 |     console.log(await row.count());
  253 | 
  254 |     const column = await table.locator('tbody tr th').count();
  255 |     console.log(column);
  256 | 
  257 |     for (let i = 0; i <= await row.count(); i++) {
  258 | 
  259 |         const rowelements: string[] = await row.nth(i).locator('td').allTextContents();
  260 |         console.log(rowelements);
  261 |         if (rowelements.includes("Selenium")) {
  262 |             console.log("selenium present in the table");
  263 | 
  264 |         }
  265 | 
  266 |     }
  267 | });
  268 | 
  269 | //*************Handling Pagination Web table***************
  270 | 
  271 | //select laptop from the table
  272 | test.skip("Handle Pagination Web Table", async ({ page }) => {
  273 | 
  274 |     await page.goto("https://testautomationpractice.blogspot.com/");
  275 |     const table = page.locator("#productTable");
  276 |     const rows = table.locator('tbody tr');
  277 |     const Pages: Locator = page.locator('#pagination a');
  278 | 
  279 |     for (let i = 0; i < await rows.count(); i++) {
  280 |         const row = rows.nth(i);
  281 |         const rowelements = await row.locator("td").allTextContents();
  282 |         if (rowelements.includes("Soundbar")) {
  283 |             await row.locator('//input[@type="checkbox"]').check();
  284 |             break;
  285 |         }
  286 |         await Pages.nth(i + 1).click();
  287 |         await expect(rows.first()).toBeVisible();
  288 |     }
  289 | 
  290 |     await page.pause();
  291 | });
  292 | 
  293 | 
  294 | //************Handle IFrame***************
  295 | test("Handle iFrame",async({page})=>{
> 296 |     await page.goto("https://selectorshub.com/iframe-scenario/");
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  297 |     await page.waitForTimeout(10000);
  298 |     const frame1=page.frameLocator("iframe#pact1").first();
  299 |     await frame1.getByPlaceholder("First Crush").fill('Abdul');
  300 |     await page.pause();
  301 | })
```