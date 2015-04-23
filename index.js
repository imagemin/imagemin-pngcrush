'use strict';

var ExecBuffer = require('exec-buffer');
var isPng = require('is-png');
var pngcrush = require('pngcrush-bin');
var through = require('through2');

module.exports = function (opts) {
	opts = opts || {};

	return through.ctor({objectMode: true}, function (file, enc, cb) {
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

		var execBuffer = new ExecBuffer();
		var args = ['-brute', '-force', '-q'];

		if (opts.reduce) {
			args.push('-reduce');
		}

		execBuffer
			.use(pngcrush, args.concat([execBuffer.src(), execBuffer.dest()]))
			.run(file.contents, function (err, buf) {
				if (err) {
					err.fileName = file.path;
					cb(err);
					return;
				}

				if (buf.length < file.contents.length) {
					file.contents = buf;
				}

				cb(null, file);
			});
	});
};
