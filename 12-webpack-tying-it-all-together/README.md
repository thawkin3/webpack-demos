# Tying It All Together

## Overview

This example pulls in all of the different concepts that have been explored in the previous examples. It includes:

- asset management for css, images, fonts, csv files, and xml files
- output management to dynamically create the `index.html` file and to clean the `dist` directory with each build
- separate webpack configs for development and production
- development servers
- a single entrypoint, but lazy loading with dynamic imports for code splitting
- separate bundles for vendor code
- bundle analysis
- tree shaking

For more in depth explanations of each concept, please see the individual example READMEs that precede this example.

## Takeaways

- Don’t use default exports that are just a bunch of methods/properties scooped up into an object. When you import that object, it imports everything. Instead, used named exports and imports, or even `import * as`, since that will only import what you actually use. The rest will be excluded through tree shaking.
    - Good: `import { cube, square } from '../util/math';`
    - Good: `import * as math from '../util/math';`
    - Bad: `import math from '../util/math';`
- In order for a module to be tree-shakeable, it has to use ES2015  `import`/`export` syntax, not CommonJS `module.exports` (for example, `lodash` is not tree-shakeable, but `lodash-es` is). When evaluating third-party packages to bring in, make sure it’s tree-shakeable (you can check on [BundlePhobia](https://bundlephobia.com/)).
- Use bundle analysis reports to identify areas of your app that are large and could be loaded dynamically. Also look for areas of your app that are made up of the same building blocks and extract those into a separate bundle, if possible.
