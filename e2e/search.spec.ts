import { expect, type Page, test } from "@playwright/test";

async function openSearch(page: Page) {
	const trigger = page.getByRole("button", { name: "search" });
	await expect(trigger).toBeVisible({ timeout: 15_000 });
	await trigger.click();
	return page.getByRole("dialog", { name: "search" });
}

async function expectSearchIsUsable(page: Page) {
	const dialog = await openSearch(page);
	await expect(dialog).toBeVisible();

	const input = dialog.getByRole("searchbox");
	await expect(input).toBeVisible();
	await expect(input).toBeFocused();

	await input.fill("astro");
	await expect(input).toHaveValue("astro");

	await page.keyboard.press("Escape");
	await expect(dialog).toBeHidden();
}

async function navigateTo(page: Page, path: string) {
	const link = page.locator(`nav#navigation-menu a[href="${path}"]`);
	if (!(await link.isVisible())) {
		await page.locator("#toggle-navigation-menu").click();
	}
	await link.click();
	// The dev server compiles pages on demand, so a first visit can be slow.
	await expect(page).toHaveURL(new RegExp(`${path}/?$`), { timeout: 15_000 });
}

test("search is usable on first load", async ({ page }) => {
	await page.goto("/");

	await expectSearchIsUsable(page);
});

test("search is usable after client-side navigation", async ({ page }) => {
	await page.goto("/");
	await expectSearchIsUsable(page);

	await navigateTo(page, "/about");

	await expectSearchIsUsable(page);
});

test("search is usable after repeated client-side navigation", async ({ page }) => {
	await page.goto("/");

	await navigateTo(page, "/about");
	await navigateTo(page, "/books");
	await navigateTo(page, "/scribbles");

	await expectSearchIsUsable(page);
});

test("navigation leaves a single search dialog behind", async ({ page }) => {
	await page.goto("/");
	await openSearch(page);
	await page.keyboard.press("Escape");

	await navigateTo(page, "/about");

	await expect(page.locator("pagefind-modal dialog")).toHaveCount(1);
});
