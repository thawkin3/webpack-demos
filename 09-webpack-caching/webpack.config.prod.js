const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack | Caching'
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'stats', 'stats.prod.json'),
      reportFilename: path.resolve(__dirname, 'stats', 'report.prod.html'),
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  devtool: 'source-map',
  optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  }
};
