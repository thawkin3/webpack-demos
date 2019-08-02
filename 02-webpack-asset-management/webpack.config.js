const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // inserts the CSS on the page in a style tag
          'css-loader'    // turns CSS into JS
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader' // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader' // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
        ]
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader', // handles reading CSV files
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
          delimiter: ','
        }
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader' // handles reading XML files
        ]
      }
    ]
  }
};
