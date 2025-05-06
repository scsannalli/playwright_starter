const { test, expect } = require('@playwright/test');
const { getUrl } = require('../utils/urlReader');

class DocsPage {
  constructor(page) {
    this.page = page;
    this.installPlaywrightLink = page.getByRole('link', { name: 'How to install Playwright' });
  }

  async verifyUrl() {
    const introUrl = await getUrl(process.env.ENV || 'qa', 'docs.intro');
    await expect(this.page).toHaveURL(introUrl);
  }

  async clickInstallPlaywright() {
    await this.installPlaywrightLink.click();
  }

  async verifyInstallSection() {
    const installUrl = await getUrl(process.env.ENV || 'qa', 'docs.install');
    await expect(this.page).toHaveURL(installUrl);
  }
  
}

module.exports = DocsPage;
