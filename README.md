# vue-beautify-loader

Simple preloader to beautify .vue files. Only tested with Webpack 2.

### Usage

jsBeautify options are optional. See below for an example.

```
  // ...
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'vue-beautify-loader',
        options: {
          jsBeautify: {
              "indent_scripts": "keep"
          }
        }
      },
      // Other loaders
    ]
  },
  // ...
```

### Install

```
npm install -g vue-beautify-loader
npm install --save-dev vue-beautify-loader
```
