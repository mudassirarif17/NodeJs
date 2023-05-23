const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('waterfull', () => {
    console.log('Please turn off the motor');
    setTimeout(() => {
        console.log("Please turn off the motor its a gentle reminder");
    }, 3000);
  });

  eventEmitter.emit('waterfull');
  console.log("Other work is doing");
