const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use:['style-loader',{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },{
          loader: 'postcss-loader',
          options: {
            postcssOptions:{
              plugins:['postcss-preset-env']
            }
          }
        }]
      }
    ]
  }, 
  plugins: [
      new CleanWebpackPlugin()
  ]
}