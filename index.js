'use strict';

var ExecBuffer = require('exec-buffer');
var imageType = require('image-type');
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
        if (imageType(file.contents) !== 'png') {
            return cb();
        }

        var exec = new ExecBuffer();
        var args = ['-brute', '-q'];

        if (opts.reduce) {
            args.push('-reduce');
        }

        exec
            .use(pngcrush, args.concat([exec.src(), exec.dest()]))
            .run(file.contents, function (err, buf) {
                if (err) {
                    return cb(err);
                }

                file.contents = buf;
                cb();
            });
    };
};
