/** */
var debug = require('nor-debug');
var ARRAY = require('nor-array');
var csv = module.exports = {};

/** Stringify data as CSV
 * @fixme The `opts.quote` is passed to regexp directly, not quoted.
 * @params opts.quote {string} A string which is passed to regexp
 */
csv.stringify = function(data, opts) {
	opts = opts || {};
	debug.assert(data).is('array');
	if(opts.delimiter === undefined) {
		opts.delimiter = ',';
	}
	if(opts.quote === undefined) {
		opts.quote = '"';
	}
	if(opts.ln === undefined) {
		opts.ln = '\n';
	}

	debug.assert(opts.delimiter).is('string');
	debug.assert(opts.quote).is('string');
	debug.assert(opts.ln).is('string');

	return ARRAY(data).map(function(row) {
		var re = new RegExp(opts.quote, "g");
		return ARRAY(row).map(function(col) { return opts.quote + (''+col).replace(re, opts.quote + opts.quote) + opts.quote; }).join(opts.delimiter);
	}).join(opts.ln);
};

/* EOF */
