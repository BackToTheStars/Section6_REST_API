
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {  // this is the observer
  console.log('There was a new sale!')
});

myEmitter.on('newSale', () => {  // this is the observer
  console.log('Customer name Nick')
});

myEmitter.on("newSale", stock => {  // this is the observer
  console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);         // this is the emitter
