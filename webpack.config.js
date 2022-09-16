const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/, //打包规则应用到以css结尾的文件上
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
