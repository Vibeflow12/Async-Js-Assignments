// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
import fs from "node:fs/promises"

async function fileWork(){
  try {
    const work = await fs.readFile("a.txt", "utf8")
    console.log("done with reading")
    const working = work.replace(/\s+/g, ' ')
    console.log("done with working")
    const work2 = await fs.writeFile("a.txt", working)
    console.log("done with wirting")
  } catch (err) {
    console.error("error: ",err)
  }
}

fileWork()
