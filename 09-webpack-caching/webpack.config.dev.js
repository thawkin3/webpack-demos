const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack | Caching'
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'stats', 'stats.dev.json'),
      reportFilename: path.resolve(__dirname, 'stats', 'report.dev.html'),
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
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
