'use strict';
const execBuffer = require('exec-buffer');
const isPng = require('is-png');
const pngcrush = require('pngcrush-bin');

module.exports = options => buf => {
	options = {
		brute: true,
		force: true,
		q: true,
		reduce: false,
		strip: false,
		...options
	};

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isPng(buf)) {
		return Promise.resolve(buf);
	}

	const args = [
	];

	if (options.force) {
		args.push('-force');
	}

	if (options.q) {
		args.push('-q');
	}

	if (options.brute) {
		args.push('-brute');
	}

	if (options.reduce) {
		args.push('-reduce');
	} else {
		args.push('-noreduce');
	}

	if (options.strip) {
		args.push('-rem');
		args.push('alla');
	}

	args.push(execBuffer.input, execBuffer.output);

	return execBuffer({
		input: buf,
		bin: pngcrush,
		args
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};
