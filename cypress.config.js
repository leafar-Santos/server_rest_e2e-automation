const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const { allureCypress } = require("allure-cypress/reporter");

const envFile = process.env.ENV_FILE || ".env.qa";

dotenv.config({
  path: envFile
});

const isCI = process.env.CI === "true";

module.exports = defineConfig({
  retries: {
    runMode: isCI ? 2 : 1,
    openMode: 0
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",

    baseUrl: process.env.CYPRESS_BASE_URL || "https://front.serverest.dev",

    env: {
      apiUrl: process.env.CYPRESS_API_URL || "https://serverest.dev"
    },

    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results"
      });

      return config;
    }
  }
});