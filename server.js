import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import config from './webpack.config';

var app = express();
if(process.env.NODE_ENV !== 'production'){
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler,{
      publicPath: config.output.publicPath,
      stats: {colors: true},
      hot:true
  }));

  app.use(webpackHotMiddleware(compiler, {
      log: console.log
  }));
}
app.set('views',path.join(process.cwd(),'views'));
app.set('view engine','jade');
app.use('/js',express.static('dist'));

var router =express.Router();
router.get('/',(req,res,next)=> res.render('index'));

app.use(router);

app.listen(3000,()=> console.log('listening on 3000'));
