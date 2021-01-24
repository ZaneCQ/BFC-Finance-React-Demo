const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = arg => path.join(__dirname, '..', arg);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // performance: {
  //   hints: 'warning'
  // },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],
  devServer: {
    contentBase: resolve('dist'),
    hot: true,
    https: false,
    open: true
  }
});