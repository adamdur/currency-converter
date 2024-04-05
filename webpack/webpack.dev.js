const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common');

const { HotModuleReplacementPlugin } = webpack;

module.exports = merge(common, {
  entry: {
    bundle: [
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, '../src/frontend'),
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
