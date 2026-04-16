import { test } from "@playwright/test";

test("homepage visual check", async ({ page }) => {
  await page.goto("http://localhost:5173");
  // Wait for fonts to load
  await page.waitForLoadState("networkidle");

  // Desktop
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
});
