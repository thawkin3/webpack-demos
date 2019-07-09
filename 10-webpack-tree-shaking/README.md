# Tree Shaking

[Webpack Docs - Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

## Key Concepts

- "Tree shaking" is a term commonly used in the JavaScript context for dead-code elimination
- Setting `optimization.usedExports: true` in your webpack config tells webpack to add comments to your unminified code that make notes about which exports are used and which are unused. If you do have an unused export, you'll see a comment like this in your bundle: `/* unused harmony export [export name here] */`
- The webpack 2 release came with built-in support for ES2015 modules (alias `harmony modules`) as well as unused module export detection. The new webpack 4 release expands on this capability with a way to provide hints to the compiler via the `"sideEffects"` property in `package.json` to denote which files in your project are "pure" and therefore safe to prune if unused.
- Setting `"sideEffects": false` in your `package.json` tells webpack that it's safe to prune unused exports. If you need more granular control than that, you can provide an array of files or glob patterns instead. `sideEffects` can also be set from the `module.rules` configuration option in your web[ack config
- Note that any imported file is subject to tree shaking. This means if you use something like `css-loader` in your project and import a CSS file, it needs to be added to the side effect list so it will not be unintentionally dropped in production mode
- To get tree shaking to work properly, ensure that no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of popular Babel preset `@babel/preset-env`), because tree shaking depends on the use of `export` and `import` statements
