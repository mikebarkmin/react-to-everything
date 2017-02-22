const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: 'assets/',
  },
  cache: true,
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    './src/main.js',
  ],
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
