const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
          delimiter: ',',
        }
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
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
        },
      },
    },
    moduleIds: 'hashed',
    runtimeChunk: 'single',
  },
};