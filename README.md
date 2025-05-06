# Playwright Starter

A starter project for Playwright functional automation testing with Node.js.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright_starter
```

2. Install dependencies:
```bash
npm install
```

3. Install browser binaries:
```bash
npx playwright install
```

## Project Structure

```
playwright_starter/
├── pages/              # Page Object Model classes
├── tests/             # Test files
├── data/              # Environment-specific data
│   ├── dev/
│   ├── qa/
│   └── uat/
├── utils/             # Utility functions
├── playwright.config.js  # Playwright configuration
└── package.json       # Project dependencies
```

## Running Tests

### Basic Test Execution
```bash
# Run all tests
npx playwright test

# Run tests in UI mode
npx playwright test --ui

# Run tests headlessly
npx playwright test --headed

# Run specific test
npx playwright test tests/example.spec.js
```

### Browser-Specific Test Execution
```bash
# Run tests on specific browser
npm run test:chrome    # Chrome
npm run test:firefox   # Firefox
npm run test:webkit    # WebKit

# Run Chrome tests in headed mode
npm run test:chrome:headed

# Run tests with specific browser using npx
npx playwright test --project=chromium    # Chrome
npx playwright test --project=firefox     # Firefox
npx playwright test --project=webkit      # WebKit
```

### Environment-Specific Test Execution
```bash
# Set environment variable
ENV=qa npx playwright test

# Override base URL
BASE_URL=https://your-url.com npx playwright test

# Combine environment and browser
ENV=qa npm run test:chrome
```

## Configuration

The project uses `playwright.config.js` for configuration. You can override the base URL and environment using environment variables:
```bash
# Override base URL
BASE_URL=https://your-url.com npx playwright test

# Specify environment (dev, qa, uat)
ENV=qa npx playwright test
```

## Test Organization

The project follows the Page Object Model (POM) pattern:
- Page objects are located in the `pages` directory
- Tests are located in the `tests` directory
- Each page object contains locators and actions for a specific page
- Tests use page objects to interact with the application

## Data Management

The project uses environment-specific data files:
- Each environment (dev, qa, uat) has its own directory in `data/`
- User data is stored in `users.data` files
- Access data using the `dataReader.js` utility
- Example usage:
```javascript
const { readUserData } = require('../utils/dataReader');

// Read data for specific environment
const userData = await readUserData('qa');

// Read data for default environment (dev)
const defaultData = await readUserData();
```
