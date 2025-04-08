const path = require("path")

module.exports = {
  target: "web",
  mode: "development",
  entry: path.resolve(__dirname, "scripts", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}