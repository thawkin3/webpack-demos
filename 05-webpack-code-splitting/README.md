# Code Splitting

[Webpack Docs - Code Splitting](https://webpack.js.org/guides/code-splitting/)

## Key Concepts

- Code splitting allows you to split your bundles into smaller chunks that can be loaded on demand or in parallel, which can lead to faster loads times for your application
- The three general approaches to code splitting are:
    - Entry Points: Manually split code using `entry` configuration
    - Prevent Duplication: Use the `SplitChunksPlugin` to dedupe and split chunks
    - Dynamic Imports: Split code via inline function calls within modules
- Using separate entry points is a good start to code-splitting, but it can result in duplicated modules between bundles
- The `SplitChunksPlugin` allows us to extract common dependencies into an existing entry chunk or an entirely new chunk. For example, if you have two bundles in your application that both use the same third-party package, you wouldn't want to load that package twice. Rather, you'd want a shared chunk so the package just gets loaded once