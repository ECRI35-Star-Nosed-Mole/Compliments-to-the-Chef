const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type:'asset/resource',
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    // this was copied from an unit earlier
    // publicPath: '/dist/',
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    // this was copied from an earlier unit
    // contentBase: path.join(__dirname, 'client/'),
    port: 8000,
    proxy: {
      '/internal': 'http://localhost:3000',
    },
    // hot: true
    // proxy: {
    //   '/savefavorite': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   },
    //   '/getfavorites': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   },
    //   '/deletefavorite': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   }
    // }
    // publicPath: 'http://localhost:3000/',
    // hotOnly: true
  },
};
