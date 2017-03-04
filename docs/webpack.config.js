'use strict'

let webpack = require('webpack')

let config = {
  entry: './index.js',
  output: {
    path: 'bin/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?publicPath=bin/'
      }
    ]
  }
}

module.exports = config
