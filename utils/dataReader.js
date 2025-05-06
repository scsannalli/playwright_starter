const fs = require('fs').promises;

/**
 * Reads user data based on the environment
 * @param {string} environment - The environment to read data from (dev, qa, uat)
 * @returns {Promise<object>} - Parsed JSON data
 */
async function readUserData(environment = 'dev') {
  try {
    const data = await fs.readFile(`data/${environment}/userdata.json`, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading user data for environment ${environment}:`, error);
    throw error;
  }
}

module.exports = {
  readUserData
};
