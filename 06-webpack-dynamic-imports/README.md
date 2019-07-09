# Dynamic Imports

[Webpack Docs - Code Splitting](https://webpack.js.org/guides/code-splitting/)

## Key Concepts

- Code splitting allows you to split your bundles into smaller chunks that can be loaded on demand or in parallel, which can lead to faster loads times for your application
- The three general approaches to code splitting are:
    - Entry Points: Manually split code using `entry` configuration
    - Prevent Duplication: Use the `SplitChunksPlugin` to dedupe and split chunks
    - Dynamic Imports: Split code via inline function calls within modules
- When using dynamic imports, `chunkFilename` determines the name of non-entry chunk files
- Since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of `module.exports`, it will instead create an artificial namespace object for the CommonJS module, and `module.exports` is treated as the `default` export
- The `webpackChunkName` comment tells webpack what to call your dynamically loaded import when it creates a chunk for it
 