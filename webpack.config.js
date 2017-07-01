var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: "./src/app/index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
