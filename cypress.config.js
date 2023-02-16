const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2s9omi",
  e2e: {
    baseUrl : 'https://kasirdemo.belajarqa.com',
    specPattern : "cypress/e2e",
    supportFile : false,
    chromeWebSecurity: false,
    testIsolation: false,
  },
})
