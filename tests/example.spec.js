const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const DocsPage = require('../pages/DocsPage');

let homePage;
let docsPage;

// Initialize pages before each test
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  docsPage = new DocsPage(page);
});

// Clean up after each test
test.afterEach(async () => {
  await homePage.page.close();
  await docsPage.page.close();
});

test('basic test', async ({ page }) => {
  await homePage.navigate();
  await homePage.verifyTitle();
  await homePage.clickGetStarted();

  await docsPage.verifyUrl();
  await docsPage.clickInstallPlaywright();
  await docsPage.verifyInstallSection();
});


