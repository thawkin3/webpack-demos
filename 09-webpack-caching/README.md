# Caching

[Webpack Docs - Caching](https://webpack.js.org/guides/caching/)

[Webpack Docs - Optimization Runtime Chunk](https://webpack.js.org/configuration/optimization/#optimizationruntimechunk)

[Webpack Docs - Optimization Module Ids](https://webpack.js.org/configuration/optimization/#optimizationmoduleids)

## Key Concepts

- Caching is a technique that browsers use to avoid having to make requests to the server for resources that they have already previously downloaded
- You can configure your output from webpack to include a `contenthash`, which will change anytime the content changes. This allows for better caching so that the user viewing your app will have new changes fetched from the server, but old files will be re-used from their browser's cache
- webpack provides an optimization feature to split runtime code into a separate chunk using the `optimization.runtimeChunk` option. Set it to `single` to create a single runtime bundle for all chunks
- using `optimization.moduleIds: 'hashed'` is supposed to provide better long term caching by making sure your bundle hashes don't change when they shouldn't, but I didn't notice a difference with or without it. The output I got was the same each time, so I'm not sure if this information is outdated or I'm just doing something wrong
