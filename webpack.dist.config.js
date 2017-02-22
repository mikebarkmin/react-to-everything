const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: 'assets/',
    path: 'dist/web/assets/',
    filename: 'main.js',
  },
  devtool: false,
  entry: './src/main.js',
  stats: {
    colors: true,
    reasons: false,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader',
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader',
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-1'],
              plugins: ['transform-decorators-legacy'],
            },
          },
        ],
      }, {
        test: /\.sass/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?outputStyle=expanded&indentedSyntax',
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }],
      },
    ],
  },
};
