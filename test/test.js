'use strict';

var bufferEqual = require('buffer-equal');
var isPng = require('is-png');
var path = require('path');
var pngcrush = require('../');
var read = require('vinyl-file').read;
var test = require('ava');

test('optimize a PNG', function (t) {
	t.plan(3);

	read(path.join(__dirname, 'fixtures/test.png'), function(err, file) {
		t.assert(!err);

		var stream = pngcrush();
		var size = file.contents.length;

		stream.on('data', function (data) {
			t.assert(data.contents.length < size);
			t.assert(isPng(data.contents));
		});

		stream.end(file);
	});
});

test('skip optimizing non-PNG file', function (t) {
	t.plan(2);

	read(__filename, function(err, file) {
		t.assert(!err);

		var stream = pngcrush();
		var buf = file.contents.slice();

		stream.on('data', function (data) {
			t.assert(bufferEqual(file.contents, buf));
		});

		stream.end(file);
	});
});
