# imagemin-pngcrush [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngcrush.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngcrush) [![Build status](https://ci.appveyor.com/api/projects/status/9r35h57cfkucec98?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-pngcrush)

> pngcrush imagemin plugin


## Install

```
$ npm install --save imagemin-pngcrush
```


## Usage

```js
var Imagemin = require('imagemin');
var imageminPngcrush = require('imagemin-pngcrush');

new Imagemin()
	.src('images/*.png')
	.dest('build/images')
	.use(imageminPngcrush({reduce: true}))
	.run();
```

You can also use this plugin with [gulp](http://gulpjs.com/):

```js
var gulp = require('gulp');
var imageminPngcrush = require('imagemin-pngcrush');

gulp.task('default', function () {
	return gulp.src('images/*.png')
		.pipe(imageminPngcrush({reduce: true})())
		.pipe(gulp.dest('build/images'));
});
```


## API

### imageminPngcrush(options)

#### options.reduce

Type: `boolean`  
Default: `false`

Enable lossless color-type or bit-depth reduction.


## License

MIT © [imagemin](https://github.com/imagemin)
