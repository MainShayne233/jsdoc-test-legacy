const port = 4000
const path = require('path')
const webpack = require('webpack')
const publicPath = `http://localhost:${port}/`
const WriteFilePlugin = require('write-file-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const prod = env === 'production'

const devEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
   path.join(__dirname, 'demo', 'main.js'),
]

const prodEntry = './src/index.js'

var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new WriteFilePlugin({test: /^(?!.*(hot)).*/}),
]

if (!prod) plugins.push( new webpack.HotModuleReplacementPlugin() )

const devOutput = {
  path: path.join(__dirname, 'lib'),
  filename: '[name].bundle.js',
  publicPath: publicPath,
}

const prodOutput = {
  library: 'index',
  libraryTarget: 'commonjs2',
  filename: 'index.js',
}

module.exports = {
  devtool: prod ? false : 'cheap-module-eval-source-map',
  entry: {
    app: prod ? prodEntry : devEntries,
  },
  output: prod ? prodOutput : devOutput,
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      'src',
      'demo',
    ],
    extensions: ['*', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    overlay: true,
    port: port,
    historyApiFallback: { index: 'demo/index.html' },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
}
