const path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist'
  },
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: extractPlugin.extract({
                  use: ['css-loader', 'sass-loader']
              })
          },
          {
              test: /\.html$/,
              use: ['html-loader']
          },
          {
              test: /\.(jpg|png|svg)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'img/', // copying
                          publicPath: 'img/' // relevance

                      }
                  }
              ]
          }
      ]
  },
  plugins: [
      extractPlugin,
      new htmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new cleanWebpackPlugin(['dist'])
  ]
};