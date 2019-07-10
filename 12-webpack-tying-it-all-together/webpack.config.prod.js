const path = require('path');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'stats', 'stats.prod.json'),
      reportFilename: path.resolve(__dirname, 'stats', 'report.prod.html'),
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
});
