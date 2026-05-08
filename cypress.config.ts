import { defineConfig } from "cypress";
import dotenv from "dotenv";
import { allureCypress } from "allure-cypress/reporter";

const envFile = process.env.ENV_FILE || ".env.qa";

dotenv.config({
  path: envFile
});

const isCI = process.env.CI === "true";

export default defineConfig({
  retries: {
    runMode: isCI ? 2 : 1,
    openMode: 0
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    baseUrl: process.env.CYPRESS_BASE_URL || "https://front.serverest.dev",
    env: {
      apiUrl: process.env.CYPRESS_API_URL || "https://serverest.dev"
    },
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
        links: {},
        categories: [],
        environmentInfo: {
          framework: "Cypress",
          project: "ServeRest E2E Automation",
          environment: envFile
        }
      });

      return config;
    }
  }
});
