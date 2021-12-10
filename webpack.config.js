const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    bundle: ["./public/src/index.js"],
  },
  resolve: {
    extensions: [".mjs", ".js", ".css"],
    mainFields: ["browser", "module", "main"],
  },
  output: {
    path: __dirname + "/public/build",
    filename: "bundle.js",
  },
  devServer: {
    proxy: {
      "/": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  mode,

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "../build/style.css" })],
  devtool: false,
};
