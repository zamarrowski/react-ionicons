'use strict'

let webpack = require('webpack')
let entryPoints = require('./src/components')
let config = {
  entry: entryPoints,
  output: {
    path: 'lib/',
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
      }
    ]
  }
}

module.exports = config
