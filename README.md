# ss-ss

This is a base configuration created by [UpperCod](https://github.com/uppercod) to work with [@atomico/element](https://github.com/atomicojs/element) + [@atomico/core](https://github.com/atomicojs/core), its objective is the publication of web-components in NPM, the generated bundle is of the `ESM` type, by default it is located in the root directory under the name `module.js`, this also generates an index.html plus a dist directory to teach the preview of the web-component, ideal for github pages.

## scripts

```json
{
    "scripts": {
		"build": "rollup -c",
		"dev": "rollup -c -w",
		"test": "karma start --single-run --browsers ChromeHeadless karma.conf.js",
		"prepare": "npm run build && npm run test"
	}
}
```

## Installation of ss-ss

### package

```bash
# npm
npm install ss-ss
# yarn
yarn add ss-ss
```

### unpkg

```html
<script type="module" src="http://unpkg.com/ss-ss?module"></script>
```
