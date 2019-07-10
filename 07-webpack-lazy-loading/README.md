# Lazy Loading

[Webpack Docs - Lazy Loading](https://webpack.js.org/guides/lazy-loading/)

[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks)

## Key Concepts

- When using dynamic imports, `chunkFilename` determines the name of non-entry chunk files
- Since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of `module.exports`, it will instead create an artificial namespace object for the CommonJS module, and `module.exports` is treated as the `default` export
- The `webpackChunkName` comment tells webpack what to call your dynamically loaded import when it creates a chunk for it
- Lazy loading occurs when you dynamically import something at a later time rather than up front. For example, you wait to load a larger bundle until the user clicks a button
- Lazy-loaded files that depend on additional third-party packages will also result in a vendors bundle being created for those packages
