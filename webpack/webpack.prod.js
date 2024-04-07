const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    bundle: path.resolve(__dirname, '../src/frontend'),
  },
  mode: 'production',
  performance: {
    hints: 'error',
    maxEntrypointSize: 800000,
    maxAssetSize: 800000,
  },
});
