import webpack from 'webpack';
import config, { isResMatch } from './webpack.config.shared';

export default {
  ...config,
  entry: [
    ...config.entry,
    `webpack-hot-middleware/client`,
  ],
  output: {
    ...config.output,
    filename: `app.js`,
    publicPath: `/static/`,
  },
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      { test: el => (!isResMatch(el, `node_modules`) || isResMatch(el, `@react-ui`)) && isResMatch(el, `.css`), loader: `style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss` },
      { test: el => (isResMatch(el, `node_modules`) && !isResMatch(el, `@react-ui`)) && isResMatch(el, `.css`), loader: `style!css` },
    ],
  },
  plugins: [
    ...config.plugins,
    new webpack.NoErrorsPlugin(),
  ],
  devtool: `cheap-module-eval-source-map`,
};
