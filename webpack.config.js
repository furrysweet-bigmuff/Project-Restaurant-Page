const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        port: 8080
    },
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist/'),
        // clean dist/
        clean: true,
        // імпорт зображень
        assetModuleFilename: 'img/[name][ext]' 
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Webpack App',
                filename: 'index.html',
                template: './src/template.html',
                inject: 'body'
            }
        ),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                // це для імпорту зображень з src to dist
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}