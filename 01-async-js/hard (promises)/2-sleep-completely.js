/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let s = new Promise((resolve) => {
    let j = Date.now()
    let c = 0
    while (Date.now() - j < milliseconds) {
       c += 10000000000

    }
    resolve();
  });
  return s;
}

module.exports = sleep;
