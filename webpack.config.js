const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const pkg = require("./package.json");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    /**
     * use index.html from src to create the production index.html
     */

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    /**
     * read paramaters from package.json
     */
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
      RELEASEDATE: JSON.stringify(require("./package.json").date),
    }),
    /**
     * copy everything from public and add it in destination folder
     */

    /*
    new CopyPlugin({
      patterns: [{ from: "data", to: "data" }],
    }),
    */
  ],
  devServer: {
    /**
     * to enable back in browser
     */
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  output: {
    /**
     * compile all in bundle.js
     */
    filename: "bundle.js",
    /**
     * output folder in dist
     */
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  entry: "./src/index.js",
  performance: {
    hints: false,
    /**
     * to avoid complaing about large index.js or bundle.js
     */
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
