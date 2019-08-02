const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'stats', 'stats.dev.json'),
      reportFilename: path.resolve(__dirname, 'stats', 'report.dev.html'),
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    usedExports: true,
  },
});
