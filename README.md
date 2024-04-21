# <img src="./priv/static/icons/icon_128.png" width="45" align="right"> Gleam Browser Extension

A template for Gleam browser extensions.

## Quick Overview

This project uses [Lustre](https://github.com/lustre-labs/lustre) and [Lustre Ui](https://github.com/lustre-labs/ui) for simplicity.<br>
Webpack is also used here, and [WebpackObfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator) is added as an example.

### 🔋 Getting Started

You **don’t** need to configure Webpack.<br>
Webpack comes in preconfigured, so that you can focus on the code.

Just clone this project, run `npm i` and you’re good to go.

## 🗃️ Project Structure

Current project structure:

```
gleam-browser-extension
├── README.md
├── build
├── release
├── node_modules
├── index.html
├── gleam.toml
├── manifest.toml
├── manifest.json
├── package.json
├── pack.mjs
├── pack.toml
├── .gitignore
├── config                    // Webpack with minimal configurations.
│   ├── paths.mjs
│   ├── webpack.common.mjs
│   └── webpack.config.mjs
├── priv/static
│   ├── icons
│   │   ├── icon_16.png
│   │   ├── icon_32.png
│   │   ├── icon_48.png
│   │   └── icon_128.png
│   └── app.mjs               // Compiled app.
├── test 
│   └── *.gleam               // Gleam test files.
└── src
    └── *.gleam               // Gleam source files.
```

## 📝 Usage

You can run some built-in commands:

### `npm run watch`

Runs the app in development mode.<br>
Then follow these instructions to see your app:

1. Open **chrome://extensions**
2. Check the **Developer mode** checkbox
3. Click on the **Load unpacked extension** button
4. Select the project folder

Or just open [localhost:1234](http://localhost:1234).

### `npm run build`

Builds the app for production.<br>
Run `npm run pack` to
copy just the extension files into the `release` folder and your app will be ready to publish to the Chrome Web Store.<br>

### `npm run pack`

Packs extension files into the `release` folder.

### `npm run repack`

Rebuilds and packs the app.<br>
It is a shorthand for `npm run build && npm run pack`.


## Contribution

Suggestions and pull requests are welcomed!

---

_Many thanks to [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli/blob/master/README.md) for the inspiration with this readme file._