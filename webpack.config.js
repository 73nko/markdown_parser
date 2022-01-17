const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    compress: true,
    port: 9000,
  },
};
