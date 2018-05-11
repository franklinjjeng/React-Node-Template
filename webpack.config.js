var CompressionPlugin = require("compression-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app', 'app.jsx'),
  output: {
    path: path.resolve(__dirname, 'src/public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src/app'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  devtool: 'source-map',
};