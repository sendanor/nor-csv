/** */
var debug = require('nor-debug');
var csv = module.exports = {};

/** Stringify data as CSV */
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
	return data.map(function(row) {
		return row.map(function(col) { return opts.quote + col.replace(opts.quote, opts.quote + opts.quote) + opts.quote; }).join(opts.delimiter);
	}).join(opts.ln);
};

/* EOF */
