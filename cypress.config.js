const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        //Global
        //Timeouts
        //Folders / Files
        //Screenshots
        //Videos
        //Downloads
        //Browser
        chromeWebSecurity: false,
        //Viewport
        //Actionability
        //e2e
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        experimentalSessionAndOrigin: true,
    },
});