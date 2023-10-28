const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
      static: './dist',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin(),
      new webpack.HotModuleReplacementPlugin(),// MiniCssExtractPlugin instance
    ],
    output: {
      filename: isDevelopment ? 'main.js' : 'main.[contenthash].js',
    },
  };
};
