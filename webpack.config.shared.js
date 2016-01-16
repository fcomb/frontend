import webpack from 'webpack';
import path from 'path';

export const isResMatch = (res, match) => res.indexOf(match) !== -1;

export default {
  entry: [
    path.join(__dirname, `src`, `index`),
  ],
  output: {
    path: path.join(__dirname, `build`),
  },
  module: {
    noParse: [`node_modules/react`],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loaders: [`babel?cacheDirectory=true`] },
      { test: /src\/[^\/]+\/assets\/icons\/[^\.]+\.svg/, loader: `svg-sprite!svgo?useConfig=svgoIcons` },
    ],
  },
  stats: {
    colors: true,
  },
  resolve: {
    root: path.join(__dirname, `src`),
    extensions: [``, `.js`, `.json`, `.jsx`, `.css`, `.scss`, `.svg`],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  postcss: (wbpck) => ([
    require(`postcss-import`)({
      addDependencyTo: wbpck,
    }),
    require(`postcss-sassy-mixins`),
    require(`postcss-for`),
    require(`postcss-conditionals`),
    require(`postcss-simple-vars`),
    require(`postcss-color-function`),
    require(`postcss-mathjs`),
    require(`postcss-nested`),
    require(`autoprefixer`)({
      browsers: [`last 2 versions`],
    }),
  ]),

  svgoIcons: {
    plugins: [
      {
        removeAttrs: {
          attrs: [`fill`, `fill-rule`],
        },
      },
    ],
  },
};
