const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: 'assets/',
  },
  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader',
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    }, {
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-1', 'react'],
      },
    }],
  },
};
