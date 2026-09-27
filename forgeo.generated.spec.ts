import { test, expect } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:3000';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL + '/');
    await page.waitForLoadState('domcontentloaded');
});

test("FUN-001 - Functional - activate 'handleScroll(\"top\")} className=\"text-sm font-semibold text-[#2C1A0E] hover:text-[#73401E] transition\" > Home' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"top\")} className=\"text-sm font-semibold text-[#2C1A0E] hover:text-[#73401E] transition\" > Home')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-002 - Functional - activate 'handleScroll(\"features\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Features' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"features\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Features')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-003 - Functional - activate 'handleScroll(\"how-it-works\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > How It Works' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"how-it-works\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > How It Works')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-004 - Functional - activate 'handleScroll(\"use-cases\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Use Cases' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"use-cases\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Use Cases')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-005 - Functional - activate 'handleScroll(\"demo\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Demo' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"demo\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Demo')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-006 - Functional - activate 'handleScroll(\"pricing\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Pricing' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"pricing\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > Pricing')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-007 - Functional - activate 'handleScroll(\"faq\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > FAQ' on /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('handleScroll(\"faq\")} className=\"text-sm font-medium text-[#6B5647] hover:text-[#2C1A0E] transition\" > FAQ')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-008 - Functional - activate 'Watch Demo (3 min)' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('Watch Demo (3 min)')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-009 - Functional - activate 'setActiveChapter(ch.id)} className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${ activeChapter === ch.id ? \"bg-[#73401E] text-white\" : \"bg-[#FAF3EA] text-[#6B5647] hover:bg-[#F0E6D8]\" }`} > {ch.title} ({ch.timestamp})' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('setActiveChapter(ch.id)} className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${ activeChapter === ch.id ? \"bg-[#73401E] text-white\" : \"bg-[#FAF3EA] text-[#6B5647] hover:bg-[#F0E6D8]\" }`} > {ch.title} ({ch.timestamp})')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-010 - Functional - activate 'toggleFaq(i)} className=\"w-full p-5 text-left font-bold text-[#2C1A0E] flex justify-between items-center hover:bg-[#FAF7F2] transition\" > {faq.q}' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('toggleFaq(i)} className=\"w-full p-5 text-left font-bold text-[#2C1A0E] flex justify-between items-center hover:bg-[#FAF7F2] transition\" > {faq.q}')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-011 - Functional - activate 'Send Message' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const button = page.locator("button:has-text('Send Message')").first();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
});
test("FUN-012 - Functional - link 'FORGEO Prompt to Production' from /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/");
});
test("FUN-013 - Functional - link 'Get Started' from /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/get-started\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/get-started");
});
test("FUN-014 - Functional - link 'Home' from /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/");
});
test("FUN-015 - Functional - link 'Team' from /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/team\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/team");
});
test("FUN-016 - Functional - link 'Contact' from /#${id}", async ({ page }) => {
    await page.goto(BASE_URL + "/#${id}");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/contact\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/contact");
});
test("FUN-017 - Functional - link 'Start Building Now' from /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/get-started\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/get-started");
});
test("FUN-018 - Functional - link 'Get Started' from /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/get-started\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/get-started");
});
test("FUN-019 - Functional - link 'Start 14-Day Free Trial' from /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/get-started\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/get-started");
});
test("FUN-020 - Functional - link 'Contact Sales' from /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/contact\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/contact");
});
test("FUN-021 - Functional - link 'Get Started with FORGEO' from /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator("a[href=\"/get-started\"]").first();
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url => url.pathname === "/get-started");
});
test("FUN-022 - Functional - form on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const field_0 = page.locator("input[placeholder=\"Your Name\"]").first();
    await expect(field_0).toBeVisible();
    await field_0.fill("FORGEO test value");
    const field_1 = page.locator("input[placeholder=\"you@company.com\"]").first();
    await expect(field_1).toBeVisible();
    await field_1.fill("forgeo.test@example.com");
    const field_2 = page.locator("input[placeholder=\"How can we help?\"]").first();
    await expect(field_2).toBeVisible();
    await field_2.fill("FORGEO test value");
    const field_3 = page.locator("textarea[placeholder=\"Tell us about your project...\"]").first();
    await expect(field_3).toBeVisible();
    await field_3.fill("FORGEO test value");
    const submit = page.locator("button[type='submit'], input[type='submit']").first();
    if (await submit.count()) {
        await submit.click();
    }
});
test("FUN-023 - Functional - input 'Your Name' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const control = page.locator("input[placeholder=\"Your Name\"]").first();
    await expect(control).toBeVisible();
    await control.fill("FORGEO test value");
    await expect(control).toBeVisible();
});
test("FUN-024 - Functional - input 'you@company.com' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const control = page.locator("input[placeholder=\"you@company.com\"]").first();
    await expect(control).toBeVisible();
    await control.fill("forgeo.test@example.com");
    await expect(control).toBeVisible();
});
test("FUN-025 - Functional - input 'How can we help?' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const control = page.locator("input[placeholder=\"How can we help?\"]").first();
    await expect(control).toBeVisible();
    await control.fill("FORGEO test value");
    await expect(control).toBeVisible();
});
test("FUN-026 - Functional - input 'Tell us about your project...' on /", async ({ page }) => {
    await page.goto(BASE_URL + "/");
    await page.waitForLoadState('domcontentloaded');
    const control = page.locator("textarea[placeholder=\"Tell us about your project...\"]").first();
    await expect(control).toBeVisible();
    await control.fill("FORGEO test value");
    await expect(control).toBeVisible();
});
