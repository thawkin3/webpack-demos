# Output Management

[Webpack Docs - Output Management](https://webpack.js.org/guides/output-management/)

## Key Concepts

- You can specify multiple entrypoints to create multiple bundles by using an object for your `entry` value
- In your output, you can then use \[name\] in your filename to use the key from your `entry` object
- `HtmlWebpackPlugin` will generate its own `index.html` file for you to help automate updating the bundles and filepaths when things change
- `CleanWebpackPlugin` will clean up your files in the `dist` directory before each build so that you don't have a bunch of outdated files stored there
