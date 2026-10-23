In Node.js, fsPromises.access() tests a user's permissions for a specific file or directory. It operates asynchronously, returning a Promise that resolves with no value on success, or rejects with an Error if the path cannot be accessed or lacks the requested permissions. [1, 2] 

import { access } from 'node:fs/promises';import { constants } from 'node:fs';
async function checkAccess() {
  try {
    // Checks if the file exists and is readable
    await access('config.json', constants.F_OK | constants.R_OK);
    console.log('File exists and is readable!');
  } catch (error) {
    console.error('Cannot access file:', error.message);
  }
}

You can pass an optional mode parameter using [Node.js File Access Constants](https://nodejs.org/api/fs.html) to check specific permissions. Combine multiple flags using the bitwise OR operator (|): [1, 2, 3] 

* constants.F_OK: Tests if the file is visible/exists (this is the default if no mode is provided). [1] 
* constants.R_OK: Tests if the file is readable by the calling process. [1, 2] 
* constants.W_OK: Tests if the file is writable by the calling process. [1, 2] 
* constants.X_OK: Tests if the file is executable by the calling process (ignored on Windows). [1, 2] 

The [Node.js Documentation](https://nodejs.org/api/fs.html) and developer consensus on platforms like [SitePoint](https://www.sitepoint.com/community/t/fs-access-fs-write-and-potential-race-conditions/419402) explicitly warn against using fsPromises.access() to check a file's existence before calling open(), readFile(), or writeFile(). [1, 4] 
Doing so introduces a race condition (Time-of-check to time-of-use), where another process might delete or modify the file in the split second between your check and your read/write attempt. [1, 4] 

* Incorrect: Check access → if true → read file.
* Correct: Attempt to read or open the file directly, and handle the resulting error (like ENOENT if the file doesn't exist) inside a try...catch block. [1, 5] 

When should you use it? Only use fsPromises.access() when you want to check a file's status without opening it, such as when updating a UI element (e.g., graying out a "Write" button) or checking file availability for an external process.
Would you like an example of how to safely read/write a file using a try...catch block without using access(), or are you troubleshooting a specific error code like ENOENT or EACCES?

[1] [https://www.geeksforgeeks.org](https://www.geeksforgeeks.org/node-js/node-js-fspromises-access-method/)
[2] [https://docs.deno.com](https://docs.deno.com/api/node/fs/)
[3] [https://nodejs.org](https://nodejs.org/api/fs.html)
[4] [https://www.sitepoint.com](https://www.sitepoint.com/community/t/fs-access-fs-write-and-potential-race-conditions/419402)
[5] [https://www.w3schools.com](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
