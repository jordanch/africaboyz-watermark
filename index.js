const gm = require("gm")
const fs = require("fs")
const path = require("path")
const promisify = require("util").promisify
const dfilename = require("debug")("africaboyz.filename")
const dfilesize = require("debug")("africaboyz.filesize")
const doffsets = require("debug")("africaboyz.offsets")

const readDir = promisify(fs.readdir)

function getOffsets(bW, bH, wW, wH) {
  return {
    x: bW > wW ? (bW - wW) / 2 : 0,
    y: bH > wH ? (bH - wH) / 2 : 0
  }
}

new Promise(function(resolve, reject) {
  gm("images/slanted.png").size(function(err, val) {
    if (err) reject(err)

    resolve({
      width: val.width,
      height: val.height
    })
  })
})
  .then(function(watermark) {
    readDir(path.join(__dirname, "images/africaboyzonline_original_images"))
      .then(function(data) {
        const images = data
          .filter((fileName) => typeof fileName === "string")
          .filter((fileName) => fileName.toLowerCase().endsWith(".jpg"))

        images.forEach(function(fileName) {
          dfilename(fileName)

          gm(`images/africaboyzonline_original_images/${fileName}`).size(
            function(err, image) {
              if (err) throw err
              dfilesize(image)

              var offsets = getOffsets(
                image.width,
                image.height,
                watermark.width,
                watermark.height
              )

              doffsets(offsets)

              gm()
                .in(`images/africaboyzonline_original_images/${fileName}`)
                .in("-page", `+${offsets.x}+${offsets.y}`)
                .in("images/slanted.png")
                .mosaic()
                .write(
                  `images/watermarked/${fileName}_watermarked.jpg`,
                  function(err) {
                    if (err) throw err
                  }
                )
            }
          )
        })
      })
      .catch(function(err) {
        console.error(`Something bad happened: ${err}`)
        throw err
      })
  })
  .catch(function(err) {
    console.error(err)
    throw err
  })
