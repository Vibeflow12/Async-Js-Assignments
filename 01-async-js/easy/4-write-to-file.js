// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
//
//
//

import fs from "node:fs/promises"

async function writeToAFile() {
  try {
    const work = await fs.writeFile("b.txt", "hello-from-coder", "utf-8")
    console.log("writing to a file is done!")
  } catch (err) {
    console.error("Error: ",err)
  }
}

writeToAFile()
