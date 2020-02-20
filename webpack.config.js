const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var ROOT_DIR = path.resolve(__dirname, 'src/client');

module.exports = {
   entry: ROOT_DIR + '/main.js',
   output: {
      path: BUILD_DIR,
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include : ROOT_DIR,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: ROOT_DIR + '/index.html'
      })
   ]
}