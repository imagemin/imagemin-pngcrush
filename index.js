'use strict';

var ExecBuffer = require('exec-buffer');
var isPng = require('is-png');
var pngcrush = require('pngcrush-bin').path;

/**
 * pngcrush image-min plugin
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
	opts = opts || {};

	return function (file, imagemin, cb) {
		if (!isPng(file.contents)) {
			cb();
			return;
		}

		var exec = new ExecBuffer();
		var args = ['-brute', '-force', '-q'];

		if (opts.reduce) {
			args.push('-reduce');
		}

		exec
			.use(pngcrush, args.concat([exec.src(), exec.dest()]))
			.run(file.contents, function (err, buf) {
				if (err) {
					cb(err);
					return;
				}

				file.contents = buf;
				cb();
			});
	};
};
