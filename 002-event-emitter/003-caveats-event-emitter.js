const {EventEmitter} = require('events');

class MyEmitter extends EventEmitter {
  constructor(str) {
    super();
    if (typeof str !== 'string') {
      // throw new TypeError();
      process.nextTick(_ => {
        this.emit('error', new TypeError('First argument must be a string'));
      });
      return;
    }
    this.emit('start');
  }
}

const ee = new MyEmitter(1);
ee.on('error', e => {
  console.log(`Error event: ${e.message}`);
});


