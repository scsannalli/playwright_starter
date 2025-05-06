const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const DocsPage = require('../pages/DocsPage');

test('basic test', async ({ page }) => {
  const homePage = new HomePage(page);
  const docsPage = new DocsPage(page);

  await homePage.navigate();
  await homePage.verifyTitle();
  await homePage.clickGetStarted();

  await docsPage.verifyUrl();
  await docsPage.clickInstallPlaywright();
  await docsPage.verifyInstallSection();
});
