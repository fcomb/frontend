const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app',
    './src/styles/app',
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.js',
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loaders: ['react-hot', 'babel?cacheDirectory=true'] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,   loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&minetype=image/svg+xml' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ],
  },
  resolve: {
    root: path.join(__dirname, '/src'),
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEV || 'true')),
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
