const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// settings resource
const package = require("./package.json");
const outputConfig = package["outputConfig"]["dev"];

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, outputConfig["outputPath"])
  },
  devServer: {
    port: 5000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
});