/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
// need to install the "del" module as a dependency
// npm i del --save-dev

module.exports = (on, config) => {
  on('after:spec', (spec, results) => {
    if (results && results.stats.failures === 0 && results.video) {
      // `del()` returns a promise, so it's important to return it to ensure
      // deleting the video is finished before moving on
      console.log(results.video);
    }
  })
}