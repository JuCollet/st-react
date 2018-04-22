const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    host: process.env.IP,
    port: process.env.PORT,
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
      }, {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        test: /\.(less|css)$/,
      }, {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 20000, name: './img/[hash].[ext]' },
        },
        'image-webpack-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Supertime - React speed test',
      template: 'src/index.ejs',
      files: {
        css: ['styles/styles.css'],
      },
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  );
}

module.exports = config;
