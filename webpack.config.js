/**
 * Webpack configuration
 * - https://webpack.js.org/configuration/
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Environment helpers
const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: [".vue", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: "vue-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ...(__DEV__
      ? [
          // Development-only plugins
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin()
        ]
      : [
          // Production-only plugins
        ])
  ],
  devServer: {
    hot: true,
    historyApiFallback: true
  }
};
