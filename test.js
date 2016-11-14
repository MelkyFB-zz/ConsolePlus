var ConsolePlus = require('./index');

var Log = new ConsolePlus({prefix: {dateTimeFormat: "%H:%M:%S",print:["{dt}","{lvl}","{file}","{func}","{msg}"],file:"test",func:"root"}});

Log.input('test','input');
Log.verbose('test','verbose');
Log.prompt('test','prompt');
Log.info('test','info');
Log.data('test','data');
Log.help('test','help');
Log.warn('test','warn');
Log.debug('test','debug');
Log.error('test','error');