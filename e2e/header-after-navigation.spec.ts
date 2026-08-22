import { expect, type Page, test } from "@playwright/test";

async function expectMenuToggles(page: Page) {
	const header = page.locator("#main-header");
	const toggle = page.locator("#toggle-navigation-menu");

	await expect(header).not.toHaveClass(/menu-open/);
	await toggle.click();
	await expect(header).toHaveClass(/menu-open/);
	await toggle.click();
	await expect(header).not.toHaveClass(/menu-open/);
}

async function expectSearchOpens(page: Page) {
	const trigger = page.getByRole("button", { name: "search" });
	await expect(trigger).toBeVisible({ timeout: 10_000 });
	await trigger.click();

	const dialog = page.getByRole("dialog", { name: "search" });
	await expect(dialog).toBeVisible();

	const input = dialog.getByRole("searchbox");
	await expect(input).toBeVisible();
	await expect(input).toBeFocused();
	await input.fill("astro");
	await expect(input).toHaveValue("astro");
	await expect(dialog.getByRole("button", { name: "Clear" })).toBeVisible();

	await page.keyboard.press("Escape");
	await expect(dialog).toBeHidden();
}

test("menu and search still work after client-side navigation", async ({ page }) => {
	await page.goto("/");

	await expectMenuToggles(page);
	await expectSearchOpens(page);

	await page.locator("#toggle-navigation-menu").click();
	await page.locator('nav#navigation-menu a[href="/about"]').click();
	await expect(page).toHaveURL(/\/about\/?$/);

	await expectMenuToggles(page);
	await expectSearchOpens(page);
});
