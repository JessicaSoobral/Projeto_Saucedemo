const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:'https://www.saucedemo.com/v1/', 
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 60000,

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      
    },

  },
});
