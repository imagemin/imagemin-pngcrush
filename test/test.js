/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var Imagemin = require('image-min');
var path = require('path');
var pngcrush = require('../');

describe('pngcrush()', function () {
    it('should optimize a PNG', function (cb) {
        var imagemin = new Imagemin();

        imagemin
            .src(path.join(__dirname, 'fixtures/test.png'))
            .use(pngcrush())
            .optimize(function (err, file) {
                assert(file.contents.length < fs.statSync(imagemin.src()).size);
                assert(file.contents.length > 0);
                cb();
            });
    });
});
