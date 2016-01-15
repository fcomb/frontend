import path from 'path';
import config, { isResMatch } from './webpack.config.shared';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  ...config,
  output: {
    ...config.output,
    filename: `app.[hash].js`,
  },
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(`style`, `!css!sass`) },
      { test: el => (!isResMatch(el, `node_modules`) || isResMatch(el, `@react-ui`)) && isResMatch(el, `.css`), loader: ExtractTextPlugin.extract(`style`, `!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss`) },
      { test: el => (isResMatch(el, `node_modules`) && !isResMatch(el, `@react-ui`)) && isResMatch(el, `.css`), loader: ExtractTextPlugin.extract(`style`, `!css`) },
    ],
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src`, process.env.MODULE, `index.production.html`),
    }),
    new ExtractTextPlugin(`app.[contenthash].css`, {
      allChunks: true,
    }),
  ],
};
