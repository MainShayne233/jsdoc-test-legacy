const path = require('path')
const webpack = require('webpack')

const prodEntry = './src/index.js'

const prodOutput = {
  library: 'index',
  libraryTarget: 'commonjs2',
  filename: 'index.js',
}

module.exports = {
  devtool: false,
  entry: {
    app: prodEntry,
  },
  output: prodOutput,
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      'src',
    ],
    extensions: ['*', '.js'],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [path.join(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
}
