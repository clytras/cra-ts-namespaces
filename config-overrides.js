/* config-overrides.js */
const { useBabelRc, addExternalBabelPlugin, addBabelPlugin, override, useEslintRc } = require('customize-cra');

// module.exports = override(
//   useBabelRc()
// );

module.exports = override(
  addBabelPlugin([
      "@babel/plugin-transform-typescript",
      { allowNamespaces: true }
  ])
);
