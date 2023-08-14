## Vanilla React

### Vanilla transpiling

1. Importing React via Script tag.
2. Using Babel to transpile JSX into React.createElement

### Becomes a headache hence need a module bundler

1. Use webpack or rollup because Babel itself doesn't handle dependency resolution or module loading; it's primarily focused on transpiling your JavaScript code.

## Rollup

Installing several packages to set up Rollup and handle JSX transpilation. Here's a breakdown of what each package does:

1. `rollup`: The main Rollup package. It's the core library that enables you to bundle your code and manage dependencies.

2. `@rollup/plugin-node-resolve`: A Rollup plugin that helps you resolve and bundle external dependencies from `node_modules`. It ensures that your code can find and include third-party packages.

3. `@rollup/plugin-commonjs`: Another Rollup plugin that converts CommonJS modules to ES6, making them compatible with Rollup's module system.

4. `@babel/core`: The core Babel package. Babel is a JavaScript compiler that allows you to transpile modern JavaScript code to older versions for broader browser compatibility.

5. `@babel/preset-env`: A Babel preset that automatically determines the necessary transformations to convert your code to the specified target environment (such as specific browser versions).

6. `@babel/preset-react`: A Babel preset specifically for handling JSX syntax and React-related transformations.

7. `@rollup/plugin-babel`: A Rollup plugin that integrates Babel into your Rollup build process. It transpiles your code using the specified Babel configurations.
