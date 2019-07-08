# Development

[Webpack Docs - Development](https://webpack.js.org/guides/development/)

## Key Concepts

- You can have multiple different webpack configs used within your project (for example, one for development and one for production)
- Source maps provide the mapping from your minified code bundles back to the original code so that you can get helpful line numbers in your error stack trace
- To have webpack automatically compile your code whenever it changes, you have a few different options:
    - webpack's Watch Mode
    - `webpack-dev-server`
    - `webpack-dev-middleware`
- Watch Mode will automatically run webpack for you when your code changes, but it's not a development server, so you still have to manually refresh the page on your own after webpack has run
- `webpack-dev-server` creates a development server that does hot reloading for you, so when you make code changes, webpack recompiles and then the page is refreshed
- `webpack-dev-middleware` is a package that `webpack-dev-server` uses internally, but it's exported as a separate package if you'd like to create a more custom setup. For example, you can combine `webpack-dev-middleware` with an express server. However, this does not get you hot reloading out of the box. You would also need to add in some additional configuration outlined in the docs [here](https://webpack.js.org/guides/hot-module-replacement/)
