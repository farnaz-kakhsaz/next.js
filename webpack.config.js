const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/src/index.html")
});
const CleanWebpackPluginConfig = new CleanWebpackPlugin
const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./dist")
    },
    plugins: [
        HtmlWebpackPluginConfig,
        CleanWebpackPluginConfig,
        HotModuleReplacementPluginConfig
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: "html-loader" }
            }
        ]
    },

}