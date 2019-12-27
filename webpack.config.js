const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/client/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src", "client")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.join(__dirname, "src", "client")
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8080,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
