'use strict';

var ExecBuffer = require('exec-buffer');
var isPng = require('is-png');
var pngcrush = require('pngcrush-bin').path;
var through = require('through2');

/**
 * pngcrush imagemin plugin
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
	opts = opts || {};

	return through.ctor({ objectMode: true }, function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new Error('Streaming is not supported'));
			return;
		}

		if (!isPng(file.contents)) {
			cb(null, file);
			return;
		}

		var exec = new ExecBuffer({ stderr: false });
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
				cb(null, file);
			});
	});
};
