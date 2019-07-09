const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
    another: './src/another.js',
    more: './src/more.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack | Bundle Analyzer'
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
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendors: {
          automaticNamePrefix: 'vendors',
          name: true,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        }
      }
    }
  }
};
