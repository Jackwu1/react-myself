const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common.js')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: distPath
        },
    }
})
