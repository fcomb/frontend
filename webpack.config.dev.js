const webpack = require('webpack');
const path    = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'app'),
  ],
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loaders: ['babel?cacheDirectory=true'] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,   loader: 'file' },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=64' },
      { test: /\.css/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss' },
    ],
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.json', '.jsx', '.css', '.svg'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  postcss: [
    require('postcss-import'),
    // require('postcss-use')({ modules: ['autoprefixer']}),
    require('postcss-sassy-mixins'),
    require('postcss-conditionals'),
    require('postcss-simple-vars'),
    require('postcss-mathjs'),
    require('postcss-nested'),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ],
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
