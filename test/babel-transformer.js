const path = require('path');
const { createTransformer } = require('babel-jest').default;

module.exports = createTransformer({
  configFile: path.resolve(__dirname, 'babel.config.js'),
});
