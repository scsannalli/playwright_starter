const fs = require('fs').promises;

/**
 * Reads URL data based on the environment
 * @param {string} environment - The environment to read data from (dev, qa, uat)
 * @returns {Promise<object>} - Parsed JSON URL data
 */
async function readUrls(environment = 'qa') {
  try {
    const data = await fs.readFile(`data/${environment}/urls.json`, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading URLs for environment ${environment}:`, error);
    throw error;
  }
}

/**
 * Gets a specific URL path
 * @param {string} environment - The environment
 * @param {string} path - The path to get (e.g., 'docs.intro')
 * @returns {Promise<string>} - The URL path
 */
async function getUrl(environment = 'qa', path) {
  const urls = await readUrls(environment);
  
  // Split the path and get the value
  return path.split('.').reduce((obj, key) => obj && obj[key], urls);
}

module.exports = {
  readUrls,
  getUrl
};
