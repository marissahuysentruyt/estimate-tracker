import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
    // Enables the "Run All Specs" UI feature, allowing the execution of multiple specs sequentially.
    experimentalRunAllSpecs: true,
    video: false
  },
});
