# imagemin-pngcrush [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngcrush.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngcrush) [![Build status](https://ci.appveyor.com/api/projects/status/9r35h57cfkucec98)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-pngcrush)

> pngcrush imagemin plugin


## Install

```bash
$ npm install --save imagemin-pngcrush
```


## Usage

```js
var Imagemin = require('imagemin');
var pngcrush = require('imagemin-pngcrush');

var imagemin = new Imagemin()
	.src('images/*.png')
	.dest('build/images')
	.use(pngcrush({ reduce: true }));

imagemin.run(function (err, files) {
	if (err) {
		throw err;
	}

	console.log('Files optimized successfully!');
});
```

You can also use this plugin with [gulp](http://gulpjs.com/):

```js
var gulp = require('gulp');
var pngcrush = require('imagemin-pngcrush');

gulp.task('default', function () {
	return gulp.src('images/*.png')
		.pipe(pngcrush({ reduce: true })())
		.pipe(gulp.dest('build/images'));
});
```


## Options

### reduce

Type: `Boolean`  
Default: `false`

Enable lossless color-type or bit-depth reduction.


## License

MIT © [imagemin](https://github.com/imagemin)
