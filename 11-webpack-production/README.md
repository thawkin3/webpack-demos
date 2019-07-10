# Production

[Webpack Docs - Production](https://webpack.js.org/guides/production/)

[webpack-merge](https://github.com/survivejs/webpack-merge)

[optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

[terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)

## Key Concepts

- You can have multiple different webpack configs used within your project (for example, one for development and one for production)
- When using multiple configs, it may be helpful to have a "common" config for shared setup that is the same between each config
- `webpack-merge` is a package that helps merging multiple webpack configs together. For example, merging your common config with your dev-specific config
- webpack v4+ will minify your code by default in production mode
- Source maps provide the mapping from your minified code bundles back to the original code so that you can get helpful line numbers in your error stack trace
- It's a good idea to use `devtool: 'source-map'` in production and to use `devtool: 'inline-source-map'` in development
- It's important to minimize your CSS for production. You can do this with `optimize-css-assets-webpack-plugin`
- Setting `optimization.minimizer` overrides the defaults provided by webpack, so make sure to also specify a JS minimizer like `terser-webpack-plugin`
