## Vanilla React

### Vanilla transpiling

1. Importing React via Script tag.
2. Using Babel to transpile JSX into React.createElement

### Becomes a headache hence need a module bundler

1. Use webpack or rollup because Babel itself doesn't handle dependency resolution or module loading; it's primarily focused on transpiling your JavaScript code.
   --caveats--
2. Had to import React whereve we are using JSX.
3. Just webpack isn't enough webpack-cli is needed to run the script.
