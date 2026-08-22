import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		baseURL: "http://localhost:4322",
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "mobile-chrome",
			use: { ...devices["Pixel 7"] },
		},
	],
	webServer: {
		command: "pnpm dev --host localhost --port 4322 --ignore-lock",
		url: "http://localhost:4322",
		reuseExistingServer: !process.env.CI,
	},
});
