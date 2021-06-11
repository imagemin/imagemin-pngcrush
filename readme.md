# imagemin-pngcrush

> pngcrush imagemin plugin

## Install

```
$ npm install --save imagemin-pngcrush
```

## Usage

```js
const imagemin = require('imagemin');
const imageminPngcrush = require('imagemin-pngcrush');

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminPngcrush()
		]
	});

	console.log('Images optimized');
})();
```

## API

### imageminPngcrush(options?)(buffer)

#### options

##### reduce

Type: `boolean`\
Default: `false`

Enable lossless color-type or bit-depth reduction.

#### buffer

Type: `buffer`

Buffer to optimize.
