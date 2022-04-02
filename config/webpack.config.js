const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const name = 'front-tools-lib'

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: `${name}.min.js`,
        path: path.resolve(__dirname, '../dist'),
        library: name,
        libraryTarget: 'umd'
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
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env']
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
}
