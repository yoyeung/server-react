const path = require( 'path');
const webpack = require( 'webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
function getEntrySource(sources){
  if (process.env.NODE_ENV !== 'production') {

        sources.push('webpack/hot/dev-server');
        sources.push('webpack-hot-middleware/client');
    }
  return sources;
}
module.exports= {

  // Gives you sourcemaps without slowing down rebundling
  devtool: 'cheap-module-source-map',
  entry: getEntrySource([path.join(__dirname, 'app')]),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': JSON.stringify('production')
     }
   })
  ],
  postcss: function() {
    return [autoprefixer];
  },



  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel-loader']
    },
    {
        test: /\.scss$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
    }]
  }
};
