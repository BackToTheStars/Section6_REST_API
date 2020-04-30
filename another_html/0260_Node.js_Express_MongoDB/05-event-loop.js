const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

console.log('----------------------');

setTimeout(() => console.log(Date.now() - start, 'Timer 1 finished'), 0);
setImmediate(() => console.log(Date.now() - start, 'Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log(Date.now() - start, 'I/O finished');
  setTimeout(() => console.log(Date.now() - start, 'Timer 2 finished'), 0);
  setTimeout(() => console.log(Date.now() - start, 'Timer 3 finished'), 3000);
  setImmediate(() => console.log(Date.now() - start, 'Immediate 2 finished'));
  // setImmediate will be executed next tick

  process.nextTick(() => {
    // this one will be executed immediately
    console.log(Date.now() - start, 'Process.nextTick');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'password encrypted');
    // pbkdf2 sync version cannot accept callback function, same as readFileSync vs. readFile

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted');
    });
    // there are 4 threads, but we are doing 5 encryption ops
  });
});

console.log(Date.now() - start, 'Hello from the top-level code!');
