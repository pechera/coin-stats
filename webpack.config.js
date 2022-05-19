const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
        ],
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          url: true,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],

  mode: "production",
};
