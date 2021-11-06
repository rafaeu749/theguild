// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
// **optional** default: `{}`
  // override vscode settings
  // Notice: It only affects the settings used by Vetur.
  settings: { },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: [
    './client', // Shorthand for specifying only the project root location
  ]
}