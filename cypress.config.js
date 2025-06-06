import 'dotenv/config';
import { defineConfig } from 'cypress';

const ENV = process.env.ENV || 'dev';
const BASE_URL = process.env[`BASE_URL_${ENV.toUpperCase()}`];

export default defineConfig({
  e2e: {
    baseUrl: BASE_URL,

    env: {
      ENV,
      BASE_URL,
    },

    setupNodeEvents(on, config) {
      const fixtureFile = ENV === 'staging'
        ? 'loginData.staging.json'
        : 'loginData.dev.json';

      config.env.fixtureFile = fixtureFile;
      return config;
    },

    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    downloadsFolder: 'cypress/downloads',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
