'use strict';
const execBuffer = require('exec-buffer');
const isPng = require('is-png');
const pngcrush = require('pngcrush-bin');

module.exports = opts => buf => {
	opts = Object.assign({}, opts);

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isPng(buf)) {
		return Promise.resolve(buf);
	}

	const args = [
		'-brute',
		'-force',
		'-q'
	];

	if (opts.reduce) {
		args.push('-reduce');
	}

	args.push(execBuffer.input, execBuffer.output);

	return execBuffer({
		input: buf,
		bin: pngcrush,
		args
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
