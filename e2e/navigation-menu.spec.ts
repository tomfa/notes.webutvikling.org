import { expect, type Page, test } from "@playwright/test";

async function expectMenuToggles(page: Page) {
	const header = page.locator("#main-header");
	const toggle = page.locator("#toggle-navigation-menu");

	await expect(header).not.toHaveClass(/menu-open/);
	await toggle.click();
	await expect(header).toHaveClass(/menu-open/);
	await expect(toggle).toHaveAttribute("aria-expanded", "true");

	await toggle.click();
	await expect(header).not.toHaveClass(/menu-open/);
	await expect(toggle).toHaveAttribute("aria-expanded", "false");
}

test("the menu toggles on first load", async ({ page }) => {
	await page.goto("/");

	await expectMenuToggles(page);
});

test("the menu toggles after client-side navigation", async ({ page }) => {
	await page.goto("/");

	await page.locator("#toggle-navigation-menu").click();
	await page.locator('nav#navigation-menu a[href="/about"]').click();
	// The dev server compiles pages on demand, so a first visit can be slow.
	await expect(page).toHaveURL(/\/about\/?$/, { timeout: 15_000 });

	await expectMenuToggles(page);
});
