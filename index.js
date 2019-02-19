const gm = require("gm")
const fs = require("fs")
const path = require("path")
const promisify = require("util").promisify

const readDir = promisify(fs.readdir)
// read files

readDir(path.join(__dirname, "images/sparesboyz_images"))
  .then((data) => {
    const images = data
      .filter((fileName) => typeof fileName === "string")
      .filter((fileName) => fileName.toLowerCase().endsWith(".jpg"))

    // image manip
    images.forEach((fileName) => {
      gm()
        .in("-page", "+0+0")
        .gravity("Center")
        .in(`images/sparesboyz_images/${fileName}`)
        .in("images/slanted.png")
        .mosaic()
        .write(`watermarked_${fileName}.jpg`, function(err) {
          if (err) throw err
        })
    })
  })
  .catch((err) => {
    console.error(`Something bad happened: ${err}`)
  })

// for each file, run the gm functions

// write multiple files
