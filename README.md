## Vanilla React

### Vanilla transpiling

1. Importing React via Script tag.
2. Using Babel to transpile JSX into React.createElement

### Becomes a headache hence need a module bundler

1. Use webpack or rollup because Babel itself doesn't handle dependency resolution or module loading; it's primarily focused on transpiling your JavaScript code.
   --caveats--
2. Had to import React whereve we are using JSX.
3. Just webpack isn't enough webpack-cli is needed to run the script.
4. Used html as a template to include on the build output and automatically import those bundle js.
5. Interestingly these script tags are `defer`red by default.
6. So the caveat has just been removed how, React >= 17 has added a new JSX transform. We use it by adding runtimt as "automatic" to our webpack config. [1]

```
{
  "presets": [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```

## References

1. [https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
