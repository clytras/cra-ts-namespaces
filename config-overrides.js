/* config-overrides.js */
const { useBabelRc, addExternalBabelPlugin, addBabelPlugin, override } = require('customize-cra');

// module.exports = override(
//   useBabelRc()
// );

module.exports = override(
  addBabelPlugin([
      "@babel/plugin-transform-typescript",
      { allowNamespaces: true }
  ])
);
