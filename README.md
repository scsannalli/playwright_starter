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
│   ├── HomePage.js
│   └── DocsPage.js
├── tests/             # Test files
│   └── example.spec.js
├── data/              # Environment-specific data
│   ├── dev/
│   │   └── userdata.json
│   ├── qa/
│   │   └── userdata.json
│   └── uat/
│       └── userdata.json
├── utils/             # Utility functions
│   └── dataReader.js
├── playwright.config.js  # Playwright configuration
└── package.json       # Project dependencies
```

## Running Tests

### Basic Test Execution
```bash
npx playwright test
```

### Run Tests in UI Mode
```bash
npx playwright test --ui
```

### Run Tests Headlessly
```bash
npx playwright test --headed
```

### Run Specific Test
```bash
npx playwright test tests/example.spec.js
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
