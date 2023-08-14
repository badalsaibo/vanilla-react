// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
import fs from "fs";
import path from "path";

const indexTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React with Bundler</title>
  </head>
  <body>
    <div id="root"></div>
	
  </body>
</html>
`;

export default {
  input: "./index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**", // Exclude transpilation of dependencies
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }),
    commonjs(),
    html({
      files: "bundle.js",
      template: () =>
        fs.readFileSync(path.resolve(__dirname, "public/index.html"), "utf8"), // Path to your HTML template
    }),
  ],
};
