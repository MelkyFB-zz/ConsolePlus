# ConsolePlus
An Advanced Console Control for Nodejs.

##Options
```
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
};
var Log = new ConsolePlus({theme:theme,prefix:prefix});
```

## Example
```
var ConsolePlus = require('./index');
var options = {
  prefix: {
    dateTimeFormat: "%H:%M:%S",
    print:["{dt}","{lvl}","{file}","{func}","{msg}"],
    file:"test",func:"root"
    }
  }
var Log = new ConsolePlus();

Log.input('test','input');
Log.verbose('test','verbose');
Log.prompt('test','prompt');
Log.info('test','info');
Log.data('test','data');
Log.help('test','help');
Log.warn('test','warn');
Log.debug('test','debug');
Log.error('test','error');
```

![Sample](http://i.imgur.com/I1BAn9o.png)

##TODO
- [X] Log
- [X] Color Log
- [X] Prefixed Log
- [ ] Fix Half Theme Json
- [ ] Identify Class/File and Function
- [ ] New Functions
- ...
- [ ] Refactoring