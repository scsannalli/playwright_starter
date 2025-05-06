const { test, expect } = require('@playwright/test');
const { getUrl } = require('../utils/urlReader');

class HomePage {
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async navigate() {
    const base = await getUrl(process.env.ENV || 'qa', 'base');
    await this.page.goto(base);
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}

module.exports = HomePage;
