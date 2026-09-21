# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Handle dropdowns menu
- Location: tests\practice.spec.ts:336:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Contact Sales' }) resolved to 3 elements:
    1) <button class="nav-link contact-btn-nav">Contact Sales</button> aka locator('#navbarNav').getByRole('button', { name: 'Contact Sales' })
    2) <input tabindex="8" type="submit" class="action" value="Contact Sales" name="action_submitForm" id="Form_getForm_action_submitForm"/> aka locator('#Form_getForm_action_submitForm')
    3) <button class="contact-btn" onclick="scrollToSection('footer-btn')">Contact Sales</button> aka locator('#footer-btn button').filter({ hasText: 'Contact Sales' })

Call log:
  - waiting for getByRole('button', { name: 'Contact Sales' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - region [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e5]:
        - img "logo" [ref=e7]
        - link "Cookiebot by Usercentrics - opens in a new window" [ref=e8] [cursor=pointer]:
          - /url: https://www.cookiebot.com/en/what-is-behind-powered-by-cookiebot/?utm_source=banner_cb&utm_medium=referral&utm_content=v2
      - tabpanel "Consent" [ref=e36]:
        - generic [ref=e38]:
          - heading "This website uses cookies" [level=2] [ref=e39]
          - paragraph [ref=e41]:
            - text: We use cookies to improve your browsing experience. By continuing to use this website, you agree to our use of cookies in accordance with our
            - link "Privacy Policy" [ref=e42] [cursor=pointer]:
              - /url: https://www.orangehrm.com/policies/orangehrm-privacy-policy
            - text: .
        - generic [ref=e43]:
          - group "Consent Selection" [ref=e49]:
            - generic [ref=e51]:
              - generic [ref=e53]:
                - checkbox "Necessary" [checked] [disabled]
              - switch "Preferences" [ref=e56] [cursor=pointer]
              - switch "Statistics" [ref=e59] [cursor=pointer]
              - switch "Marketing" [ref=e62] [cursor=pointer]
          - link "Show details" [ref=e64] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e68]:
        - button "Allow all" [ref=e69] [cursor=pointer]
        - button "Allow selection" [ref=e70] [cursor=pointer]
        - button "Deny" [ref=e71] [cursor=pointer]
      - button "Close banner" [ref=e72] [cursor=pointer]
  - navigation [ref=e75]:
    - generic [ref=e76]:
      - link [ref=e77] [cursor=pointer]:
        - /url: /
        - img "OrangeHRM Logo" [ref=e78]
      - generic [ref=e79]:
        - list [ref=e80]:
          - listitem
          - listitem [ref=e81]:
            - link "Solutions" [ref=e82] [cursor=pointer]:
              - /url: /contact-sales#
          - listitem [ref=e83]:
            - link "Why OrangeHRM" [ref=e84] [cursor=pointer]:
              - /url: /contact-sales#
          - listitem [ref=e85]:
            - link "Resources" [ref=e86] [cursor=pointer]:
              - /url: /contact-sales#
          - listitem [ref=e87]:
            - link "Company" [ref=e88] [cursor=pointer]:
              - /url: /contact-sales#
          - listitem [ref=e89]:
            - link "Pricing" [ref=e90] [cursor=pointer]:
              - /url: /pricing
        - text:            
        - list [ref=e91]:
          - listitem [ref=e92]:
            - button "Language" [ref=e93] [cursor=pointer]:
              - generic [ref=e94]: 
              - generic [ref=e96]: Global
              - generic [ref=e97]: 
            - text:   
          - listitem [ref=e98]:
            - link [ref=e99] [cursor=pointer]:
              - /url: /book-a-free-demo
              - button "Book a Free Demo" [ref=e100]
          - listitem [ref=e101]:
            - link [ref=e102] [cursor=pointer]:
              - /url: /contact-sales
              - button "Contact Sales" [ref=e103]
  - iframe [ref=e104]:
    
  - main [ref=e105]:
    - generic [ref=e107]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - heading "Talk to Our Experts to Discover a Better Way to Manage Your Workforce!" [level=1] [ref=e112]
          - img "form-image OHRM" [ref=e113]
        - generic [ref=e115]:
          - heading "Talk To An Expert" [level=3] [ref=e116]
          - generic [ref=e117]:
            - group [ref=e118]:
              - textbox "Full Name" [ref=e121]:
                - /placeholder: Full Name*
                - text: Abdul
              - textbox "Email" [ref=e124]:
                - /placeholder: Work Email*
                - text: abc123@gmail.com
              - textbox "Phone Number" [ref=e127]:
                - /placeholder: Phone Number*
                - text: "746784385643"
              - combobox "Country" [ref=e130]:
                - option "Country"
                - option "Afghanistan"
                - option "Albania"
                - option "Algeria"
                - option "American Samoa"
                - option "Andorra"
                - option "Angola"
                - option "Anguilla"
                - option "Antigua and Barbuda"
                - option "Argentina"
                - option "Armenia"
                - option "Aruba"
                - option "Australia"
                - option "Austria"
                - option "Azerbaijan"
                - option "Bahamas"
                - option "Bahrain"
                - option "Bangladesh"
                - option "Barbados"
                - option "Belarus"
                - option "Belgium"
                - option "Belize"
                - option "Benin"
                - option "Bermuda"
                - option "Bhutan"
                - option "Bolivia"
                - option "Bosnia and Herzegowina"
                - option "Botswana"
                - option "Bouvet Island"
                - option "Brazil"
                - option "Brunei Darussalam"
                - option "Bulgaria"
                - option "Burkina Faso"
                - option "Burundi"
                - option "Cambodia"
                - option "Cameroon"
                - option "Canada"
                - option "Cape Verde"
                - option "Cayman Islands"
                - option "Central African Republic"
                - option "Chad"
                - option "Chile"
                - option "China"
                - option "Christmas Island"
                - option "Cocos (Keeling) Islands"
                - option "Colombia"
                - option "Comoros"
                - option "Congo"
                - option "Cook Islands"
                - option "Costa Rica"
                - option "Cote D'Ivoire"
                - option "Croatia"
                - option "Cuba"
                - option "Cyprus"
                - option "Czech Republic"
                - option "Denmark"
                - option "Djibouti"
                - option "Dominica"
                - option "Dominican Republic"
                - option "East Timor"
                - option "Ecuador"
                - option "Egypt"
                - option "El Salvador"
                - option "Equatorial Guinea"
                - option "Eritrea"
                - option "Estonia"
                - option "Ethiopia"
                - option "Falkland Islands (Malvinas)"
                - option "Faroe Islands"
                - option "Fiji"
                - option "Finland"
                - option "France"
                - option "French Guiana"
                - option "French Polynesia"
                - option "French Southern Territories"
                - option "Gabon"
                - option "Gambia"
                - option "Georgia"
                - option "Germany"
                - option "Ghana"
                - option "Gibraltar"
                - option "Greece"
                - option "Greenland"
                - option "Grenada"
                - option "Guadeloupe"
                - option "Guam"
                - option "Guatemala"
                - option "Guinea"
                - option "Guinea-bissau"
                - option "Guyana"
                - option "Haiti"
                - option "Heard and Mc Donald Islands"
                - option "Honduras"
                - option "Hong Kong"
                - option "Hungary"
                - option "Iceland"
                - option "India" [selected]
                - option "Indonesia"
                - option "Iran"
                - option "Iraq"
                - option "Ireland"
                - option "Israel"
                - option "Italy"
                - option "Jamaica"
                - option "Japan"
                - option "Jordan"
                - option "Kazakhstan"
                - option "Kenya"
                - option "Kiribati"
                - option "North Korea"
                - option "South Korea"
                - option "Kuwait"
                - option "Kyrgyzstan"
                - option "Laos"
                - option "Latvia"
                - option "Lebanon"
                - option "Lesotho"
                - option "Liberia"
                - option "Libya"
                - option "Liechtenstein"
                - option "Lithuania"
                - option "Luxembourg"
                - option "Macau"
                - option "Macedonia"
                - option "Madagascar"
                - option "Malawi"
                - option "Malaysia"
                - option "Maldives"
                - option "Mali"
                - option "Malta"
                - option "Marshall Islands"
                - option "Martinique"
                - option "Mauritania"
                - option "Mauritius"
                - option "Mayotte"
                - option "Mexico"
                - option "Moldova"
                - option "Monaco"
                - option "Montenegro"
                - option "Mongolia"
                - option "Morocco"
                - option "Mozambique"
                - option "Myanmar"
                - option "Namibia"
                - option "Nauru"
                - option "Nepal"
                - option "Netherlands"
                - option "Netherlands Antilles"
                - option "New Caledonia"
                - option "New Zealand"
                - option "Nicaragua"
                - option "Niger"
                - option "Nigeria"
                - option "Niue"
                - option "Norfolk Island"
                - option "Northern Mariana Islands"
                - option "Norway"
                - option "Oman"
                - option "Pakistan"
                - option "Palau"
                - option "Panama"
                - option "Papua New Guinea"
                - option "Paraguay"
                - option "Peru"
                - option "Philippines"
                - option "Poland"
                - option "Portugal"
                - option "Puerto Rico"
                - option "Qatar"
                - option "Reunion"
                - option "Romania"
                - option "Russian Federation"
                - option "Rwanda"
                - option "St Kitts and Nevis"
                - option "St Lucia"
                - option "St Vincent and the Grenadines"
                - option "Samoa"
                - option "San Marino"
                - option "Sao Tome and Principe"
                - option "Saudi Arabia"
                - option "Senegal"
                - option "Serbia"
                - option "Seychelles"
                - option "Sierra Leone"
                - option "Singapore"
                - option "Slovakia"
                - option "Slovenia"
                - option "Solomon Islands"
                - option "Somalia"
                - option "South Africa"
                - option "South Georgia"
                - option "Spain"
                - option "Sri Lanka"
                - option "Sudan"
                - option "Suriname"
                - option "Swaziland"
                - option "Sweden"
                - option "Switzerland"
                - option "Syrian Arab Republic"
                - option "Taiwan"
                - option "Tajikistan"
                - option "Tanzania"
                - option "Thailand"
                - option "Togo"
                - option "Tokelau"
                - option "Tonga"
                - option "Trinidad and Tobago"
                - option "Tunisia"
                - option "Turkey"
                - option "Turkmenistan"
                - option "Turks and Caicos Islands"
                - option "Tuvalu"
                - option "Uganda"
                - option "Ukraine"
                - option "United Arab Emirates"
                - option "United Kingdom"
                - option "United States"
                - option "Uruguay"
                - option "Uzbekistan"
                - option "Vanuatu"
                - option "Venezuela"
                - option "Vietnam"
                - option "Virgin Islands"
                - option "Western Sahara"
                - option "Yemen"
                - option "Zambia"
                - option "Zimbabwe"
                - option "South Sandwich Islands"
                - option "St Helena"
                - option "St Pierre and Miquelon"
                - option "Vatican City"
                - option "Wallis and Futuna Islands"
                - option "Zaire"
              - textbox "Company Name" [ref=e133]: hope.com
              - textbox "Job title" [ref=e136]:
                - /placeholder: Job Title*
                - text: Automation Engineer
              - combobox "No Of Employees" [ref=e139]:
                - option "Number of Employees"
                - option "< 10"
                - option "11 - 50" [selected]
                - option "51 - 200"
                - option "200 - 1,000"
                - option "> 1,000"
              - textbox "Your Message" [active] [ref=e142]:
                - /placeholder: Your Message*
                - text: Sales Pages
              - iframe [ref=e148]:
                - generic [ref=f3e2]:
                  - generic [ref=f3e3]:
                    - checkbox "I'm not a robot" [ref=f3e7]
                    - generic [ref=f3e9]: I'm not a robot
                  - generic [ref=f3e12]: reCAPTCHA
            - button "Contact Sales" [ref=e150] [cursor=pointer]
          - paragraph [ref=e151]:
            - text: We respect your privacy. By submitting, you agree to your information being processed according to our
            - link "Privacy Policy." [ref=e152] [cursor=pointer]:
              - /url: https://www.orangehrm.com/policies/orangehrm-privacy-policy
      - generic [ref=e154]:
        - heading "Powering HR for businesses across 100+ countries" [level=5] [ref=e158]
        - generic [ref=e163]:
          - generic [ref=e165]:
            - img "toluna logo" [ref=e170]
            - img "CFI logo" [ref=e175]
            - img "Colten Care Logo" [ref=e180]
            - img "DyStar" [ref=e185]
            - img "Hawkeye Logo" [ref=e190]
            - img "Helen Hayes Logo" [ref=e195]
            - img "Puma Logo" [ref=e200]
            - img "rewe fat east" [ref=e205]
            - img "Toyota Logo" [ref=e210]
            - img "Rutgers University Emblem" [ref=e215]
            - img "Sandals" [ref=e220]
            - img "Food for the Hungry" [ref=e225]
            - img "stanley black" [ref=e230]
            - img "Projects Abroad" [ref=e235]
            - img "Chelton" [ref=e240]
            - img "GALfoundation" [ref=e245]
            - img "TCL" [ref=e250]
            - img "toluna logo" [ref=e255]
            - img "CFI logo" [ref=e260]
            - img "Colten Care Logo" [ref=e265]
            - img "DyStar" [ref=e270]
            - img "Hawkeye Logo" [ref=e275]
            - img "Helen Hayes Logo" [ref=e280]
            - img "Puma Logo" [ref=e285]
            - img "rewe fat east" [ref=e290]
            - img "Toyota Logo" [ref=e295]
            - img "Rutgers University Emblem" [ref=e300]
            - img "Sandals" [ref=e305]
            - img "Food for the Hungry" [ref=e310]
            - img "stanley black" [ref=e315]
            - img "Projects Abroad" [ref=e320]
            - img "Chelton" [ref=e325]
            - img "GALfoundation" [ref=e330]
            - img "TCL" [ref=e335]
            - img "toluna logo" [ref=e340]
          - generic [ref=e341]:
            - button
            - button
            - button
            - button
      - generic [ref=e343]:
        - heading "Find the perfect HR solution for your business" [level=2] [ref=e347]
        - generic [ref=e350]:
          - generic [ref=e353]:
            - img "1" [ref=e355]
            - paragraph [ref=e356]: Our experts will help create a tailored strategy to perfectly match your organization's unique requirements.
          - generic [ref=e359]:
            - img "2" [ref=e361]
            - paragraph [ref=e362]: Discover how OrangeHRM saves you time, effort, and resources with our comprehensive modules.
          - generic [ref=e365]:
            - img "3" [ref=e367]
            - paragraph [ref=e368]: Experience OrangeHRM through a customized, 1-on-1 demo that highlights key features and benefits.
          - generic [ref=e371]:
            - img "4" [ref=e373]
            - paragraph [ref=e374]: Our sales team ensures the platform remains effective as your needs evolve, supporting your organization's growth.
      - generic [ref=e375]:
        - heading "Consolidate Your HR Processes into One Smart Platform" [level=2] [ref=e380]
        - generic [ref=e385]:
          - generic [ref=e387]:
            - heading "People Management" [level=3] [ref=e389]
            - paragraph [ref=e391]: The demands of HR, from managing daily challenges to overseeing extensive paperwork, can be significant. With a strong people management strategy backed by automating your HR processes, you can equip your team with the necessary resources to thrive.
            - list [ref=e393]:
              - listitem [ref=e394]: HR Administration
              - separator [ref=e395]
              - listitem [ref=e396]: Employee Management
              - separator [ref=e397]
              - listitem [ref=e398]: Reporting and Analytics
              - separator [ref=e399]
              - listitem [ref=e400]: Mobile App
              - separator [ref=e401]
          - button [ref=e403] [cursor=pointer]:
            - img "HR Administration" [ref=e404]
        - generic [ref=e409]:
          - generic [ref=e411]:
            - heading "Talent Management" [level=3] [ref=e413]
            - paragraph [ref=e415]: A thriving company culture depends on a recruitment team that ensures every hire aligns with its values and vision. Beyond creating a positive candidate experience they require a robust applicant tracking system and the ability to offer an automated, world-class onboarding experience to ensure your new employees are ready before they even step through the door.
            - list [ref=e417]:
              - listitem [ref=e418]: Recruitment
              - separator [ref=e419]
              - listitem [ref=e420]: Onboarding
              - separator [ref=e421]
              - listitem [ref=e422]: Request Desk
              - separator [ref=e423]
          - button [ref=e425] [cursor=pointer]:
            - img "Recruitment" [ref=e426]
        - generic [ref=e431]:
          - generic [ref=e433]:
            - heading "Compensation" [level=3] [ref=e435]
            - paragraph [ref=e437]: Eliminate the complexity of manually managing leave management, time and attendance tracking, and employee scheduling. With a comprehensive HRMS, you can automate these processes, reduce manual errors, and ensure that all your data flows effortlessly across your HR department. This lets you focus on strategic HR initiatives and building a more productive workplace, instead of getting bogged down by administrative tasks.
            - list [ref=e439]:
              - listitem [ref=e440]: Leave Management
              - separator [ref=e441]
              - listitem [ref=e442]: Time and Attendance
              - separator [ref=e443]
              - listitem [ref=e444]: Roster
              - separator [ref=e445]
          - button [ref=e447] [cursor=pointer]:
            - img "Roster Dashboard" [ref=e448]
        - generic [ref=e453]:
          - generic [ref=e455]:
            - heading "Culture" [level=3] [ref=e457]
            - paragraph [ref=e459]: Your commitment to developing your people fosters a thriving company culture where employees feel valued and are more engaged. By actively managing performance, supporting career development, and providing effective training, you empower your team to grow, enabling you to recognize challenges and celebrate successes.
            - list [ref=e461]:
              - listitem [ref=e462]: Performance Management
              - separator [ref=e463]
              - listitem [ref=e464]: Career Development
              - separator [ref=e465]
              - listitem [ref=e466]: Training
              - separator [ref=e467]
              - listitem [ref=e468]: Surveys
              - separator [ref=e469]
              - listitem [ref=e470]: Employee Voice
              - separator [ref=e471]
          - button [ref=e473] [cursor=pointer]:
            - img "Career Development" [ref=e474]
      - generic [ref=e475]:
        - generic [ref=e476]:
          - generic [ref=e479]:
            - heading "Frequently Asked Questions" [level=2] [ref=e480]
            - paragraph [ref=e482]: Everything you need to know about OrangeHRM
          - generic [ref=e486]:
            - generic [ref=e487]:
              - heading [level=2] [ref=e488]:
                - button "Does OrangeHRM offer solutions for companies of all sizes?" [expanded] [ref=e489] [cursor=pointer]
              - generic "Does OrangeHRM offer solutions for companies of all sizes?" [ref=e490]: Yes. OrangeHRM offers scalable solutions designed to adapt to your organizational growth, whether you are a small startup or a large enterprise. Our sales team will tailor the solution to your specific and evolving needs.
            - heading [level=2] [ref=e493]:
              - button "How can I get detailed information on pricing?" [ref=e494] [cursor=pointer]
            - heading [level=2] [ref=e496]:
              - button "What should I expect from a product demonstration?" [ref=e497] [cursor=pointer]
            - heading [level=2] [ref=e499]:
              - button "Does the OrangeHRM platform grow with my organization?" [ref=e500] [cursor=pointer]
        - generic [ref=e502]:
          - generic [ref=e503]:
            - img "Team Member" [ref=e504]
            - img "Team Member" [ref=e505]
            - img "Team Member" [ref=e506]
          - heading [level=4] [ref=e507]:
            - strong [ref=e508]: Still have questions?
          - paragraph [ref=e509]: Can’t find the answer you’re looking for? Talk to one of our product experts today!
          - button "Contact Sales" [ref=e510] [cursor=pointer]
  - contentinfo [ref=e511]:
    - generic [ref=e515]:
      - generic [ref=e518]:
        - link [ref=e520] [cursor=pointer]:
          - /url: /
          - img "OrangeHRM Logo" [ref=e521]
        - generic [ref=e523]:
          - img "users-love-us" [ref=e526]
          - img "CoreHR_HighPerformer_HighPerformer" [ref=e529]
          - img "sourceforge-user-reviews" [ref=e532]
          - link [ref=e536] [cursor=pointer]:
            - /url: https://sourceforge.net/software/product/OrangeHRM/?pk_campaign=badge&pk_source=vendor
            - img "OrangeHRM Advanced Reviews" [ref=e537]
          - img "CoreHR_HighPerformer_HighPerformer" [ref=e540]
          - img "users-love-us" [ref=e543]
      - generic [ref=e545]:
        - generic [ref=e547]:
          - heading "Company" [level=5] [ref=e548]
          - list [ref=e549]:
            - listitem [ref=e550]:
              - link "About Us" [ref=e551] [cursor=pointer]:
                - /url: https://orangehrm.com/company/about-us
            - listitem [ref=e552]:
              - link "Become a Partner" [ref=e553] [cursor=pointer]:
                - /url: https://orangehrm.com/why-orangehrm/partners/partner-programs
            - listitem [ref=e554]:
              - link "Contact Us" [ref=e555] [cursor=pointer]:
                - /url: https://orangehrm.com/company/contact
            - listitem [ref=e556]:
              - link "Press Releases" [ref=e557] [cursor=pointer]:
                - /url: https://orangehrm.com/company/press-releases
            - listitem [ref=e558]:
              - link "News Articles" [ref=e559] [cursor=pointer]:
                - /url: https://orangehrm.com/company/news-articles
            - listitem [ref=e560]:
              - link "Careers" [ref=e561] [cursor=pointer]:
                - /url: https://orangehrm.com/company/careers
            - listitem [ref=e562]:
              - link "Contact Sales" [ref=e563] [cursor=pointer]:
                - /url: https://orangehrm.com/contact-sales
            - listitem [ref=e564]:
              - link "Our Offices" [ref=e565] [cursor=pointer]:
                - /url: https://orangehrm.com/company/about-us
            - listitem [ref=e566]:
              - link "Help Portal" [ref=e567] [cursor=pointer]:
                - /url: https://help.orangehrm.com
            - listitem [ref=e568]:
              - link "AI Help Desk" [ref=e569] [cursor=pointer]:
                - /url: https://aihelpdesk.orangehrm.com/
            - listitem [ref=e570]:
              - link "CS & Support" [ref=e571] [cursor=pointer]:
                - /url: https://help.orangehrm.com/hc/en-us/articles/54232712645913
        - generic [ref=e573]:
          - heading "Resources" [level=5] [ref=e574]
          - list [ref=e575]:
            - listitem [ref=e576]:
              - link "E-Books" [ref=e577] [cursor=pointer]:
                - /url: https://orangehrm.com/resources/e-books
            - listitem [ref=e578]:
              - link "Blog" [ref=e579] [cursor=pointer]:
                - /url: https://orangehrm.com/resources/blog
            - listitem [ref=e580]:
              - link "HR Dictionary" [ref=e581] [cursor=pointer]:
                - /url: https://orangehrm.com/resources/hr-dictionary
            - listitem [ref=e582]:
              - link "Advanced Overview" [ref=e583] [cursor=pointer]:
                - /url: https://orangehrm.com/assets/Documents/pdf/Product-Overview.pdf
            - listitem [ref=e584]:
              - link "Data Security Promise" [ref=e585] [cursor=pointer]:
                - /url: https://orangehrm.com/resources/other-resources/data-security-promise
            - listitem [ref=e586]:
              - link "OrangeHRM AI Principles" [ref=e587] [cursor=pointer]:
                - /url: https://orangehrm.com/ai-principles
            - listitem [ref=e588]:
              - link "Product Updates" [ref=e589] [cursor=pointer]:
                - /url: https://orangehrm.com/product-updates
        - generic [ref=e591]:
          - heading "Policies" [level=5] [ref=e592]
          - list [ref=e593]:
            - listitem [ref=e594]:
              - link "Privacy Policy" [ref=e595] [cursor=pointer]:
                - /url: https://orangehrm.com/policies/orangehrm-privacy-policy
            - listitem [ref=e596]:
              - link "Service Privacy Policy" [ref=e597] [cursor=pointer]:
                - /url: https://orangehrm.com/policies/orangehrm-service-privacy-policy
            - listitem [ref=e598]:
              - link "General Public License" [ref=e599] [cursor=pointer]:
                - /url: https://orangehrm.com/policies/gnu-general-public-license
            - listitem [ref=e600]:
              - link "Commercial License" [ref=e601] [cursor=pointer]:
                - /url: https://orangehrm.com/assets/Uploads/OrangeHRM-Commercial-License.pdf
            - listitem [ref=e602]:
              - link "DPF Privacy Policy" [ref=e603] [cursor=pointer]:
                - /url: https://orangehrm.com/assets/Documents/DPF-Privacy-Policy.pdf
            - listitem [ref=e604]:
              - link "Modern Day Slavery Statement" [ref=e605] [cursor=pointer]:
                - /url: https://orangehrm.com/assets/Documents/policies/orangehrm-modern-slavery-statement.pdf?_gl=1*sh1nzz*_gcl_au*MjkzNzAzODc0LjE3NDY1MDk2NDIuMTM0NTAzNDkwMi4xNzUwMjI4ODE5LjE3NTAyMjg4NDM.
            - listitem [ref=e606]:
              - link "Cookie Declaration" [ref=e607] [cursor=pointer]:
                - /url: https://orangehrm.com/policies/cookie-declaration
        - generic [ref=e609]:
          - heading "Alternatives" [level=5] [ref=e610]
          - list [ref=e611]:
            - listitem [ref=e612]:
              - link "Freshteam Alternative" [ref=e613] [cursor=pointer]:
                - /url: https://orangehrm.com/freshteam-alternative
    - generic [ref=e616]:
      - paragraph [ref=e620]: OrangeHRM Inc. © 2026 All Rights Reserved.
      - generic [ref=e621]:
        - list [ref=e623]:
          - listitem [ref=e624]:
            - link [ref=e625] [cursor=pointer]:
              - /url: https://www.facebook.com/OrangeHRM
              - img "facebook" [ref=e627]
          - listitem [ref=e628]:
            - link [ref=e629] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/orangehrm/mycompany/
              - img "linkedin" [ref=e631]
          - listitem [ref=e632]:
            - link [ref=e633] [cursor=pointer]:
              - /url: https://x.com/orangehrm
              - img "youtube" [ref=e635]
          - listitem [ref=e636]:
            - link [ref=e637] [cursor=pointer]:
              - /url: https://www.youtube.com/user/orangehrm
              - img "linkedin" [ref=e639]
          - listitem [ref=e640]:
            - link [ref=e641] [cursor=pointer]:
              - /url: https://www.instagram.com/orangehrm_?igsi=MWpvYmtpMDN2cGJsbQ%3D%3D
              - img "linkedin" [ref=e643]
        - link "Site Map" [ref=e645] [cursor=pointer]:
          - /url: /site-map
```

# Test source

```ts
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
  295 | test.skip("Handle iFrame", async ({ page }) => {
  296 |     await page.goto("https://selectorshub.com/iframe-scenario/");
  297 |     await page.waitForTimeout(10000);
  298 |     const frame1 = page.frameLocator("iframe#pact1").first();
  299 |     await frame1.getByPlaceholder("First Crush").fill('Abdul');
  300 |     await page.pause();
  301 | })
  302 | 
  303 | test.skip("handle the ui with test", async ({ page }) => {
  304 | 
  305 |     await page.goto("https://www.google.com/");
  306 | 
  307 |     await page.getByRole('combobox', { name: 'Search' }).fill("Test");
  308 |     await page.locator(`//input[@value="Google Search"]`).nth(0).click();
  309 |     await page.locator(`//h3[starts-with(text(),"Test")]`).first().click();
  310 | 
  311 |     await page.pause();
  312 | 
  313 | 
  314 | });
  315 | 
  316 | //how do you handle shadow dom in playwright
  317 | // Playwright will do auto piercing of shadom dom element, we will commonly use css slector to do perform this task
  318 | // Xpath is not supported here
  319 | 
  320 | //Xpath is not supported because xpath works only within regular DOM structure/tree, it cannot access the
  321 | //Shadom dom boundary
  322 | 
  323 | //(playwright will consider shadow dom like a normal element)
  324 | 
  325 | /* test("Handle shadow dom",async({page})=>{
  326 |     await page.goto("https://selectorshub.com/shadow-dom-in-iframe/");
  327 |     const sd:FrameLocator=page.frameLocator('iframe#pact').first();
  328 |    // sd.locator('#tea').first().fill("Yes");
  329 |     await page.locator("#training").first().fill("No");
  330 | 
  331 | }); */
  332 | 
  333 | //QA Automation Engineer | 4.7 Years | Immediate Joiner | Playwright | JavaScript | TypeScript | Cucumber BDD | POM |Git | SIP | Diameter | SIPp | JMeter | Jenkins | Wireshark | Seagul | Functional Testing | SoftBank & TPx ,Diameter Project Experience.
  334 | 
  335 | //Handle dropDowns
  336 | test("Handle dropdowns menu", async ({ }) => {
  337 | 
  338 |     const browser = await chromium.launch();
  339 |     const browserContext = await browser.newContext();
  340 |     const page = await browserContext.newPage();
  341 | 
  342 |     await page.goto("https://orangehrm.com/contact-sales");
  343 |     await page.locator('//input[@name="FullName"]').fill("Abdul");
  344 |     await page.locator('//input[@name="Email"]').fill("abc123@gmail.com");
  345 |     await page.getByPlaceholder('Phone Number*').type('746784385643');
  346 |     await page.locator('//select[@name="Country"]').selectOption({ value: 'India' });
  347 |     await page.getByPlaceholder("Company Name").fill("hope.com");
  348 |     await page.locator('//input[@name="JobTitle"]').fill("Automation Engineer");
  349 |     await page.locator('//select[@name="NoOfEmployees"]').selectOption({ value: '11 - 50' });
  350 |     await page.locator('//textarea[@name="Comment"]').fill("Sales Pages");
  351 |     //await page.locator('#recaptcha-anchor').click();
> 352 |     await page.getByRole('button', { name: 'Contact Sales' }).click();
      |                                                               ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Contact Sales' }) resolved to 3 elements:
  353 | 
  354 |     await page.pause();
  355 | 
  356 | });
```