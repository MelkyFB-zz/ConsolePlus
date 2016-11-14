# ConsolePlus
An Advanced Console Control for Nodejs.
##TODO
- [X] Log
- [X] Color Log
- [X] Prefixed Log
- [ ] ...

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
