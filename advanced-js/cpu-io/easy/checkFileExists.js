// Problem Description – Check File Exists
//
// Your task is to implement an asynchronous function `checkFileExists(path)`
// that returns `true` if a file exists and `false` otherwise.
//
// Requirements:
// 1. Use the `fs.promises` API.
// 2. Do NOT use `fs.existsSync` (which is synchronous).
// 3. Hint: Use `fs.promises.access()` and handle the error if it doesn't exist.

const fs = require("fs").promises;

async function checkFileExists(path) {
  let ff = await fs.promises.acc


}

module.exports = checkFileExists;


// import { access } from 'node:fs/promises';
// import { constants } from 'node:fs';

// async function checkAccess() {
//   try {
//     // Checks if the file exists and is readable
//     await access('config.json', constants.F_OK | constants.R_OK);
//     console.log('File exists and is readable!');
//   } catch (error) {
//     console.error('Cannot access file:', error.message);
//   }
// }
