# imagemin-pngcrush [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngcrush.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngcrush) [![Build status](https://ci.appveyor.com/api/projects/status/9r35h57cfkucec98)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-pngcrush)

> pngcrush image-min plugin


## Install

```bash
$ npm install --save imagemin-pngcrush
```


## Usage

```js
var Imagemin = require('image-min');
var pngcrush = require('imagemin-pngcrush');

var imagemin = new Imagemin()
	.src('foo.png')
	.dest('foo-optimized.png')
	.use(pngcrush({ reduce: true }));

imagemin.optimize();
```


## Options

### reduce

Type: `Boolean`  
Default: `false`

Enable lossless color-type or bit-depth reduction.


## License

MIT © [imagemin](https://github.com/imagemin)
