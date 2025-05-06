const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://playwright.dev',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
module.exports.projects.forEach(project => {
  if (process.env.ENV === 'qa') {
    project.use.baseURL = 'https://playwright.dev';
  } else if (process.env.ENV === 'dev') {
    project.use.baseURL = 'https://playwright.dev';
  } else if (process.env.ENV === 'uat') {
    project.use.baseURL = 'https://uat.playwright.dev';
  }
});
