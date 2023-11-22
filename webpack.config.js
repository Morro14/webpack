const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static:'./dist',
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    esModule: true,
                  },
                },
                'css-loader',
           ],
          },
        ],
      },
    
}