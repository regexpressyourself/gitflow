var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const webpack = require('webpack');
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader", 
          query:{
              presets:['es2015', 'react']
          }
      },
      {test: /\.css$/, 
          loader: "style-loader!css-loader"}
    ]
  },
  plugins: [

      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('production')
          }
      }),

      new webpack.optimize.UglifyJsPlugin(),
      HTMLWebpackPluginConfig
  ]
};
