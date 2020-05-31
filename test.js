const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const isPng = require('is-png');
const test = require('ava');
const m = require('.');

const readFile = promisify(fs.readFile);

test('minify a PNG', async t => {
	const buf = await readFile(path.join(__dirname, 'fixture.png'));
	const data = await m()(buf);
	t.true(data.length < buf.length);
	t.true(isPng(data));
});
