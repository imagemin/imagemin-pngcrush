# imagemin-pngcrush [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngcrush.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngcrush) [![Build status](https://ci.appveyor.com/api/projects/status/9r35h57cfkucec98?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-pngcrush)

> pngcrush imagemin plugin


## Install

```
$ npm install --save imagemin-pngcrush
```


## Usage

```js
const imagemin = require('imagemin');
const imageminPngcrush = require('imagemin-pngcrush');

imagemin(['images/*.png'], 'build/images', {
	plugins: [
		imageminPngcrush()
	]
}).then(() => {
	console.log('Images optimized');
});
```


## API

### imageminPngcrush([options])(buffer)

#### options

##### reduce

Type: `boolean`<br>
Default: `false`

Enable lossless color-type or bit-depth reduction.

#### buffer

Type: `buffer`

Buffer to optimize.


## License

MIT © [imagemin](https://github.com/imagemin)
