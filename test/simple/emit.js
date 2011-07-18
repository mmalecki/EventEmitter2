var simpleEvents = require('nodeunit').testCase;

var file = '../../lib/em';

module.exports = simpleEvents({

  setUp: function (callback) {
    var EventEmitter2;

    if(typeof require !== 'undefined') {
      EventEmitter2 = require(file).EventEmitter2;
    }
    else {
      EventEmitter2 = window.EventEmitter2;
    }

    this.emitter = new EventEmitter2({ verbose: true });
    callback();
  },

  tearDown: function (callback) {
    //clean up?
    callback();
  },

  '1. Add two listeners on a single event and emit the event.': function (test) {

    var emitter = this.emitter;

    function functionA() { test.ok(true, 'The event was raised'); }
    function functionB() { test.ok(true, 'The event was raised'); }

    emitter.on('test2', functionA);
    emitter.on('test2', functionB);

    emitter.emit('test2');

    test.expect(2);
    test.done();

  },  
  '2. Add two listeners on a single event and emit the event twice.': function (test) {

    var emitter = this.emitter;

    function functionA() { test.ok(true, 'The event was raised'); }
    function functionB() { test.ok(true, 'The event was raised'); }

    emitter.on('test2', functionA);
    emitter.on('test2', functionB);

    emitter.emit('test2');
    emitter.emit('test2');

    test.expect(4);
    test.done();

  },
  '3. Add two listeners on a single event and emit the event with a parameter.': function (test) {

    var emitter = this.emitter;

    function functionA(value1) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The event was raised');
    }
  
    function functionB(value1) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The event was raised');
    }

    emitter.on('test2', functionA);
    emitter.on('test2', functionB);

    emitter.emit('test2', 'Hello, Node');

    test.expect(4);
    test.done();

  },
  '4. Add two listeners on an single event and emit the event twice with a parameter.': function (test) {
  
    var emitter = this.emitter;

    function functionA(value1) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The event was raised');
    }
  
    function functionB(value1) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The event was raised');
    }

    emitter.on('test2', functionA);
    emitter.on('test2', functionB);

    emitter.emit('test2', 'Hello, Node1');
    emitter.emit('test2', 'Hello, Node2');

    test.expect(8);
    test.done();

  },
  '5. Add two listeners on an single event and emit the event twice with multiple parameters.': function (test) {
  
    var emitter = this.emitter;

    function functionA(value1, value2, value3) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The value named "value1" is OK');
      test.equal(typeof value2, 'string', 'The value named "value2" is OK');
      test.equal(typeof value3, 'string', 'The value named "value3" is OK');
    }
  
    function functionB(value1, value2, value3) {
      test.ok(true, 'The event was raised');
      test.equal(typeof value1, 'string', 'The value named "value1" is OK');
      test.equal(typeof value2, 'string', 'The value named "value2" is OK');
      test.equal(typeof value3, 'string', 'The value named "value3" is OK');
    }

    emitter.on('test2', functionA);
    emitter.on('test2', functionB);

    emitter.emit('test2', 'Hello, Node1', 'Hello, Node2', 'Hello, Node3');
    emitter.emit('test2', 'Hello, Node1', 'Hello, Node2', 'Hello, Node3');

    test.expect(16);
    test.done();

  }

});

