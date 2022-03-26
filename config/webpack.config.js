const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'front-tool-lib.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'front-tool-lib',
    libraryTarget: "umd"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
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