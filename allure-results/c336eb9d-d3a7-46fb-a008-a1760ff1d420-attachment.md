# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Handle shadow dom
- Location: tests\practice.spec.ts:316:1

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('//iframe[@id="pact"]') resolved to 2 elements:
    1) <iframe id="pact" width="100" height="700" src="https://selectorshub.com/shadow-dom-closed-shadowdom/"></iframe> aka locator('#pact').first()
    2) <iframe id="pact" width="100" height="800" src="https://selectorshub.com/shadow-dom-closed-shadowdom/"></iframe> aka locator('section #pact')

Call log:
  - waiting for locator('//iframe[@id="pact"]').contentFrame().locator('#tea').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - banner [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - heading [level=5] [ref=e7]:
          - link "Get free access to our advanced XPath & CSS course. Ends in -" [ref=e8] [cursor=pointer]:
            - /url: https://selectorshub.com/get-free-access-of-advanced-xpath-and-css-selector-paid-course/
        - generic [ref=e10]:
          - generic [ref=e11]: 10 Hrs
          - generic [ref=e12]: 00 Min
          - generic [ref=e13]: 00 Sec
        - link "Claim It Here" [ref=e15] [cursor=pointer]:
          - /url: https://selectorshub.com/get-free-access-of-advanced-xpath-and-css-selector-paid-course/
      - generic [ref=e20]:
        - link [ref=e22] [cursor=pointer]:
          - /url: https://selectorshub.com
        - navigation "Menu" [ref=e24]:
          - generic "Menu Toggle" [ref=e25]:
            - list [ref=e26]:
              - listitem [ref=e27]:
                - generic [ref=e28]:
                  - generic [ref=e29]: Products
                  - button "Open Products" [ref=e31]
              - listitem [ref=e36]:
                - generic [ref=e37]:
                  - generic [ref=e38]: Pricing
                  - button "Open Pricing" [ref=e40]
              - listitem [ref=e45]:
                - link "Courses" [ref=e47] [cursor=pointer]:
                  - /url: /courses-recordings/
              - listitem [ref=e49]:
                - link "Practice" [ref=e51] [cursor=pointer]:
                  - /url: /xpath-practice-page/
              - listitem [ref=e53]:
                - link "Meetup" [ref=e55] [cursor=pointer]:
                  - /url: https://selectorshub.com/meetup
              - listitem [ref=e57]:
                - generic [ref=e58]:
                  - generic [ref=e59]: Resources
                  - button "Open Resources" [ref=e61]
              - listitem [ref=e66]:
                - link "Support" [ref=e68] [cursor=pointer]:
                  - /url: /contact-us/
        - link [ref=e72] [cursor=pointer]:
          - /url: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIyNjU3IiwidG9nZ2xlIjpmYWxzZX0%3D"
  - main [ref=e75]:
    - generic [ref=e80]:
      - heading "Shadow DOM in iframe" [level=6] [ref=e82]
      - iframe [ref=e85]:
        - generic [ref=f1e1]:
          - generic [ref=f1e8]:
            - heading "Snacks" [level=4] [ref=f1e9]
            - textbox "Chai is a feeling" [ref=f1e12]:
              - /placeholder: Do you love tea
            - generic [ref=f1e14]:
              - heading "Lunch Time" [level=4] [ref=f1e15]
              - textbox "What would you like to have in lunch?" [ref=f1e21]
            - iframe [ref=f1e23]:
              - generic [ref=f3e1]: mobile
          - generic [ref=f1e25]: tablet
  - contentinfo [ref=e86]:
    - contentinfo [ref=e87]:
      - generic [ref=e88]:
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link [ref=e92] [cursor=pointer]:
              - /url: https://selectorshub.com
              - img "SelectorHub Logo" [ref=e93]
            - generic [ref=e94]:
              - paragraph [ref=e95]: We’re Here to Enhance Your Web Testing—Start Now
              - paragraph [ref=e96]: support@selectorshub.com
          - generic [ref=e97]:
            - heading "Free Tools" [level=4] [ref=e99]
            - navigation "Menu" [ref=e101]:
              - list [ref=e102]:
                - listitem [ref=e103]:
                  - link "SelectorsHub – Best Tool to auto generate Playwright Locators and Xpath" [ref=e104] [cursor=pointer]:
                    - /url: https://selectorshub.com/selectorshub/
                - listitem [ref=e105]:
                  - link "TestCase Studio" [ref=e106] [cursor=pointer]:
                    - /url: https://selectorshub.com/testcase-studio/
                - listitem [ref=e107]:
                  - link "Check My Links" [ref=e108] [cursor=pointer]:
                    - /url: https://selectorshub.com/checkmylinks/
                - listitem [ref=e109]:
                  - link "Exploratory Tester" [ref=e110] [cursor=pointer]:
                    - /url: https://selectorshub.com/exploratory-tester/
                - listitem [ref=e111]:
                  - link "Screenshot with URL" [ref=e112] [cursor=pointer]:
                    - /url: https://selectorshub.com/screenshot-with-url/
                - listitem [ref=e113]:
                  - link "Page Load Timer" [ref=e114] [cursor=pointer]:
                    - /url: https://selectorshub.com/page-load-timer/
                - listitem [ref=e115]:
                  - link "Testing Daily" [ref=e116] [cursor=pointer]:
                    - /url: https://selectorshub.com/testing-daily/
                - listitem [ref=e117]:
                  - link "Auto Data Filler" [ref=e118] [cursor=pointer]:
                    - /url: https://selectorshub.com/auto-data-filler/
                - listitem [ref=e119]:
                  - link "AutoTestData" [ref=e120] [cursor=pointer]:
                    - /url: https://selectorshub.com/autotestdata/
                - listitem [ref=e121]:
                  - link "Automation Tool Analyzer" [ref=e122] [cursor=pointer]:
                    - /url: https://selectorshub.com/automation-tool-analyzer/
                - listitem [ref=e123]:
                  - link "AI Post Creator" [ref=e124] [cursor=pointer]:
                    - /url: https://selectorshub.com/ai-post-creator/
          - generic [ref=e125]:
            - heading "Paid Tools" [level=4] [ref=e127]
            - navigation "Menu" [ref=e129]:
              - list [ref=e130]:
                - listitem [ref=e131]:
                  - link "SelectorsHub Pro" [ref=e132] [cursor=pointer]:
                    - /url: https://selectorshub.com/selectorshub-pro/
                - listitem [ref=e133]:
                  - link "TestCase Studio Pro" [ref=e134] [cursor=pointer]:
                    - /url: https://selectorshub.com/testcase-studio-pro/
                - listitem [ref=e135]:
                  - link "Promote with us" [ref=e136] [cursor=pointer]:
                    - /url: https://selectorshub.com/selectorshub-ads/
          - generic [ref=e137]:
            - heading "Resources" [level=4] [ref=e139]
            - navigation "Menu" [ref=e141]:
              - list [ref=e142]:
                - listitem [ref=e143]:
                  - link "Courses" [ref=e144] [cursor=pointer]:
                    - /url: https://selectorshub.com/courses-recordings/
                - listitem [ref=e145]:
                  - link "Trainings" [ref=e146] [cursor=pointer]:
                    - /url: https://selectorshub.com/bootcamp/
                - listitem [ref=e147]:
                  - link "Video Tutorials" [ref=e148] [cursor=pointer]:
                    - /url: https://www.youtube.com/c/SelectorsHub?sub_confirmation=1
                - listitem [ref=e149]:
                  - link "Meetup" [ref=e150] [cursor=pointer]:
                    - /url: https://selectorshub.com/meetup/
                - listitem [ref=e151]:
                  - link "SelectorsHub Offers" [ref=e152] [cursor=pointer]:
                    - /url: https://selectorshub.com/offers/
          - generic [ref=e153]:
            - heading "Useful Links" [level=4] [ref=e155]
            - navigation "Menu" [ref=e157]:
              - list [ref=e158]:
                - listitem [ref=e159]:
                  - link "About Us" [ref=e160] [cursor=pointer]:
                    - /url: https://selectorshub.com/team/
                - listitem [ref=e161]:
                  - link "Contact Us" [ref=e162] [cursor=pointer]:
                    - /url: https://selectorshub.com/contact-us/
                - listitem [ref=e163]:
                  - link "Sponsors" [ref=e164] [cursor=pointer]:
                    - /url: https://selectorshub.com/sponsors/
                - listitem [ref=e165]:
                  - link "Practice Page" [ref=e166] [cursor=pointer]:
                    - /url: https://selectorshub.com/xpath-practice-page/
                - listitem [ref=e167]:
                  - link "Cancellation & Refund Policy" [ref=e168] [cursor=pointer]:
                    - /url: https://selectorshub.com/cancellation-refund-policy/
                - listitem [ref=e169]:
                  - link "Certification" [ref=e170] [cursor=pointer]:
                    - /url: https://selectorshub.com/certification/
                - listitem [ref=e171]:
                  - link "Privacy Policy" [ref=e172] [cursor=pointer]:
                    - /url: https://selectorshub.com/privacy-policy/
                - listitem [ref=e173]:
                  - link "Terms of Service" [ref=e174] [cursor=pointer]:
                    - /url: https://selectorshub.com/terms-of-service/
        - generic [ref=e175]:
          - generic [ref=e176]: Copyright © 2026 SelectorsHub ® . All rights reserved
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Youtube" [ref=e182] [cursor=pointer]:
                - /url: https://www.youtube.com/c/SelectorsHub?sub_confirmation=1
            - listitem [ref=e186]:
              - link "Telegram" [ref=e187] [cursor=pointer]:
                - /url: https://t.me/selectorshub
            - listitem [ref=e191]:
              - link "Instagram" [ref=e192] [cursor=pointer]:
                - /url: https://www.instagram.com/SelectorsHub/
            - listitem [ref=e196]:
              - link "Linkedin" [ref=e197] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/selectorshub/about
            - listitem [ref=e201]:
              - link "Facebook" [ref=e202] [cursor=pointer]:
                - /url: https://www.facebook.com/selectorshub/
            - listitem [ref=e206]:
              - link "Twitter" [ref=e207] [cursor=pointer]:
                - /url: https://x.com/SelectorsHub
  - generic [ref=e211]: desktop
```

# Test source

```ts
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
  317 |     await page.goto("https://selectorshub.com/shadow-dom-in-iframe/");
  318 |     const sd=page.frameLocator('//iframe[@id="pact"]');
> 319 |     sd.locator('#tea').first().fill("Yes");
      |                                ^ Error: locator.fill: Error: strict mode violation: locator('//iframe[@id="pact"]') resolved to 2 elements:
  320 | 
  321 | 
  322 | });
```