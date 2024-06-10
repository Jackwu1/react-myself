const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths.js')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common.js')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    mode: 'production',
    output: {
        filename: 'bundle.[contenthash].js',
        path: distPath
    }
})