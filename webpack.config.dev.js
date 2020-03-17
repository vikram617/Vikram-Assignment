const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry:  { main: './src/index.js' },
  output: {
    path:     path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool:   'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('develop')
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
        test: /\.(scss|css)$/,
        use:  [
          { loader: 'style-loader' },
          {
            loader:  'css-loader',
            options: {
              sourceMap:      true,
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