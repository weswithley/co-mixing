const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

// settings resource
const package = require("./package.json");
const outputConfig = package["outputConfig"]["prod"];

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, outputConfig["outputPath"]),
    filename: outputConfig["filename"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});