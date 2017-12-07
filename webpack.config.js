const path = require('path');
const glob = require('glob');
const pugLoader = require('pug-loader');
const cleanWebpack = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


let config = {
    entry: {
        "bundle.js": "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name]"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist',
        //hot: true
    },
    // module: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new cleanWebpack(['dist'])
    ],
}

glob.sync('views/**/*.pug').map(
    page => config.plugins.push(
        new HtmlWebpackPlugin(
            {
                filename: `${page.replace(/(^views\/|\.pug$)/gi, '')}.html`,
                template: `!!pug-loader?pretty!${page}`,
                minify: false,
            }
        )
    )
);

module.exports = config;