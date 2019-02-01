const gm = require("gm")

gm()
  .in("-page", "+0+0")
  .in("images/base.png")
  .in("images/watermark2.png")
  .mosaic()
  .write("tesOutput.jpg", function(err) {
    if (err) console.log(err)
  })
