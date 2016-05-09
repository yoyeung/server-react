const path = require( 'path');
const fs = require('fs');
const webpack = require( 'webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var autoprefixer = require('autoprefixer');
var precss = require('precss');
function getEntrySource(sources){
  if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://0.0.0.0:8989');
        sources.push('webpack/hot/only-dev-server');
        // sources.push('webpack-hot-middleware/client?http://0.0.0.0:3000');
    }
  return sources;
}
module.exports= {

  // Gives you sourcemaps without slowing down rebundling
  devtool: 'cheap-module-eval-source-map',
  entry: getEntrySource([path.join(__dirname, 'app')]),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [

    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  // plugins: [
  //   new ExtractTextPlugin('dist/css/app.css', {
  //           allChunks: true
  //       })
  // ],
  postcss: function() {
    return [require('autoprefixer')];
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel-loader']
    },
    {
        test: /\.scss$/,
        loaders: ["style","css","postcss","sass"]
    }]
  }
};
require.extensions['.scss'] = function () {}
