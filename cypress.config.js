// Use ES Module syntax
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // Set your application's base URL
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js', // Spec file naming convention
    downloadsFolder: 'cypress/downloads',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true, // Enable or disable video recording
    retries: {
      runMode: 2, // Retries during headless mode
      openMode: 0, // Retries during interactive mode
    },
  },
});
