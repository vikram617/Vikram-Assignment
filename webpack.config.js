const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry:  { main: './src/index.js' },
  output: {
    path:     path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename:      '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:  [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
