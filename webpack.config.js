const path = require('path');
const pugHtmlLoader = require('pug-html-loader');
const htmlLoader = require('html-loader');
const fileLoader = require('file-loader');
const extractText = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractPug = new extractText('[name].html')

module.exports = {
    entry: {
        index: "./views/index.pug",
        about: "./views/about.pug",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].html"
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.pug/,
            use: extractPug.extract({
                fallback: "html-loader",
                use: ['html-loader', 'pug-html-loader?pretty&exports=false'],
            })
        }]
    },
    plugins: [
        extractPug,
        new webpack.HotModuleReplacementPlugin()
    ]
}