const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: 'assets/',
    path: 'dist/assets/',
    filename: 'main.js',
  },
  debug: false,
  devtool: false,
  entry: './src/main.js',
  stats: {
    colors: true,
    reasons: false,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader',
      },
    ],
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-1', 'react'],
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    }],
  },
};
