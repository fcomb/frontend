const webpack = require('webpack');

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      {
        test: /(.js|.jsx)/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0&cacheDirectory=true']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
};

module.exports = config;
