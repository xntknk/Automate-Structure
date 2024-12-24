import 'dotenv/config'; // Load environment variables from .env
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.ENV === 'staging'
      ? 'https://mts-bol-staging.inconstruction.website'
      : 'https://mts-bol-dev.inconstruction.website',
    
    env: {
      ENV: process.env.ENV || 'dev', // Default to dev if ENV is not set
    },

    setupNodeEvents(on, config) {
      // Dynamically resolve the fixture file
      const fixtureFile = config.env.ENV === 'staging'
        ? 'loginData.staging.json'
        : 'loginData.dev.json';

      // console.log(`Using fixture file: ${fixtureFile}`);
      
      // Set the resolved file in the config
      config.env.fixtureFile = fixtureFile;

      return config; // Return modified config object
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
