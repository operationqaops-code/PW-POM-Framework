# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Handle shadow dom
- Location: tests\practice.spec.ts:316:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_TIMED_OUT at https://selectorshub.com/shadow-dom-in-iframe/
Call log:
  - navigating to "https://selectorshub.com/shadow-dom-in-iframe/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: selectorshub.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
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
  295 | test.skip("Handle iFrame",async({page})=>{
  296 |     await page.goto("https://selectorshub.com/iframe-scenario/");
  297 |     await page.waitForTimeout(10000);
  298 |     const frame1=page.frameLocator("iframe#pact1").first();
  299 |     await frame1.getByPlaceholder("First Crush").fill('Abdul');
  300 |     await page.pause();
  301 | })
  302 | 
  303 | test.skip("handle the ui with test",async({page})=>{
  304 | 
  305 |      await page.goto("https://www.google.com/");
  306 | 
  307 |     await page.getByRole('combobox',{name:'Search'}).fill("Test");
  308 |     await page.locator(`//input[@value="Google Search"]`).nth(0).click();
  309 |     await page.locator(`//h3[starts-with(text(),"Test")]`).first().click();
  310 | 
  311 |     await page.pause();
  312 | 
  313 | 
  314 | });
  315 | 
  316 | test("Handle shadow dom",async({page})=>{
> 317 |     await page.goto("https://selectorshub.com/shadow-dom-in-iframe/");
      |                ^ Error: page.goto: net::ERR_TIMED_OUT at https://selectorshub.com/shadow-dom-in-iframe/
  318 |     const sd=page.frameLocator('//iframe[@id="pact"]');
  319 |     sd.locator('#tea').first().fill("Yes");
  320 | 
  321 | 
  322 | });
```