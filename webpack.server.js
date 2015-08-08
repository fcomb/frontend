const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './build',
  hot: true,
  stats: { colors: true },
  historyApiFallback: true,
}).listen(3000, 'localhost', function(err) {
  if (err) {
    return err;
  }

  console.log('Listening at localhost:3000');
});
