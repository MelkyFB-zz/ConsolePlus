var c = require('colors');

var theme = {
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
};

var prefix = {
	file: "test.js",
	func: "main",
	dateTimeFormat: "%Y-%m-%d %H:%M:%S",
	print: ["{dt}","{lvl}","{file}","{func}","{msg}"]
}

var ConsolePlus = function(options=null){
	if(options){
		if(options.theme) theme = options.theme;
		if(options.prefix) prefix = options.prefix;
	}

	c.setTheme(theme);

	var input = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('input',msgFull);
		console.log(c.input(msgFull));
	};

	var verbose = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('verbose',msgFull);
		console.log(c.verbose(msgFull));
	};

	var prompt = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('prompt',msgFull);
		console.log(c.prompt(msgFull));
	};

	var info = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('info',msgFull);
		console.log(c.info(msgFull));
	};

	var data = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('data',msgFull);
		console.log(c.data(msgFull));
	};

	var help = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('help',msgFull);
		console.log(c.help(msgFull));
	};

	var warn = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('warn',msgFull);
		console.log(c.warn(msgFull));
	};

	var debug = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('debug',msgFull);
		console.log(c.debug(msgFull));
	};

	var error = function(...msgs){
		msgFull = concatenateMessages(msgs);
		msgFull = prefixMaker('error',msgFull);
		console.log(c.error(msgFull));
	};

	var concatenateMessages = function(msgs){
		var msgFull = "";
		for(var msg of msgs){
			if(msgs.indexOf(msg)==0)
				msgFull += msg;
			else
				msgFull += " "+msg;
		}
		return msgFull;
	};

	var prefixMaker = function(lvl,msg){
		var msgReturn = "";
		for(var t of prefix.print){
			if(prefix.print.indexOf(t) == (prefix.print.length-1)){
				if(t=="{dt}") msgReturn += (dateFormat((new Date()),prefix.dateTimeFormat,true));
				else if(t=="{lvl}") msgReturn += (lvl.toUpperCase());
				else if(t=="{msg}") msgReturn += (msg);
				else if(t=="{file}") msgReturn += (prefix.file);
				else if(t=="{func}") msgReturn += (prefix.func);
			} else {
				if(t=="{dt}") msgReturn += (dateFormat((new Date()),prefix.dateTimeFormat,true) + " - ");
				else if(t=="{lvl}") msgReturn += (lvl.toUpperCase() + " - ");
				else if(t=="{msg}") msgReturn += (msg + " - ");
				else if(t=="{file}") msgReturn += (prefix.file + " - ");
				else if(t=="{func}") msgReturn += (prefix.func + " - ");
			}
		}
		return msgReturn;
	};

	var dateFormat = function(date, fstr, utc) {
		utc = utc ? 'getUTC' : 'get';
		return fstr.replace (/%[YmdHMS]/g, function (m) {
			switch (m) {
	    case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
	    case '%m': m = 1 + date[utc + 'Month'] (); break;
	    case '%d': m = date[utc + 'Date'] (); break;
	    case '%H': m = date[utc + 'Hours'] (); break;
	    case '%M': m = date[utc + 'Minutes'] (); break;
	    case '%S': m = date[utc + 'Seconds'] (); break;
	    default: return m.slice (1); // unknown code, remove %
	}
	    // add leading zero if required
	    return ('0' + m).slice (-2);
	});
	};
	return {
		input: input,
		verbose: verbose,
		prompt: prompt,
		info: info,
		data: data,
		help: help,
		warn: warn,
		debug: debug,
		error: error
	};
};

module.exports = ConsolePlus;